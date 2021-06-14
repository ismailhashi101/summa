import time
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from flask import Flask, request, jsonify

import requests
import spacy
import tldextract

from uuid import uuid4
from bs4 import BeautifulSoup
from summa import keywords

from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words


LANGUAGE = "english"
nlp = spacy.load("en_core_web_sm")

app = Flask(__name__)
CORS(app)


@app.route("/summarize", methods=["POST"])
def summarizeText():
    start = time.time()

    requestData = request.get_json()
    data = requestData["summary"]

    articleURL = data["url"]
    textBody = data["summaryBox"]
    sentences = data["sentences"]

    if articleURL:
        title, strippedText = summarize.getText(articleURL)

    if textBody:
        summaryText = textBody
    else:
        summaryText = strippedText

    shortUrl = summarize.getDomainName(articleURL)
    keywords = summarize.getKeywords(summaryText)
    summarizedSentences, summarizedText = summarize.summarizeText(
        articleURL, int(sentences)
    )
    end = time.time()
    summaryTime = summarize.getSummaryTime(start, end)
    contentReducedPercentage = summarize.contentReducedBy(summaryText, summarizedText)
    summary = summarize.getSummary(
        shortUrl,
        title,
        summarizedSentences,
        summaryTime,
        contentReducedPercentage,
        sentences,
        keywords,
    )

    return jsonify(summary)

@app.route("/hello")
def hello():
    return "hello!"


def getTextFromUrl(url):
    parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
    return parser.document


def getTextFromFile(file):
    # only for plain text files right now
    # document.txt
    parser = PlaintextParser.from_file(file, Tokenizer(LANGUAGE))
    return parser.document


def getTextFromString(text):
    parser = PlaintextParser.from_string(text, Tokenizer(LANGUAGE))
    return parser.document


def getText(url):
    htmlText = requests.get(url).text
    soup = BeautifulSoup(htmlText, "html.parser")
    title = soup.find("title").string
    strippedText = soup.get_text()
    return title, strippedText


def getDomainName(url):
    extract = tldextract.extract(url)
    return ".".join([extract.domain, extract.suffix])


def contentReducedBy(originalText, finalText):
    originalLength = len([token.text for token in nlp(originalText)])
    summarizedLength = len([token.text for token in nlp(finalText)])
    reducedBy = originalLength - summarizedLength
    reducedPercentage = (reducedBy / originalLength) * 100
    return reducedPercentage


def getKeywords(originalText):
    # get the top 10 keywords
    keywordsString = keywords.keywords(originalText)
    res = keywordsString.split("\n")
    return res[0:10]


def getSummaryTime(initialTime, finalTime):
    return finalTime - initialTime


def summarizeText(url, sentence_count):
    parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
    stemmer = Stemmer(LANGUAGE)
    model = Summarizer(stemmer)
    model.stop_words = get_stop_words(LANGUAGE)
    extracted_sentences = model(parser.document, sentence_count)
    summary = [str(sentence) for sentence in extracted_sentences]
    return summary, " ".join(summary)

def summarizeFurther(text, sentence_count):
    parser = PlaintextParser.from_string(text, Tokenizer(LANGUAGE))
    stemmer = Stemmer(LANGUAGE)
    model = Summarizer(stemmer)
    model.stop_words = get_stop_words(LANGUAGE)
    extracted_sentences = model(parser.document, sentence_count)
    summary = [str(sentence) for sentence in extracted_sentences]
    return summary, " ".join(summary)


def getSummary(
    articleURL,
    title,
    summaryResult,
    summaryTime,
    contentReducedBy,
    sentences,
    keywords,
):
    summaryData = {
        "id": str(uuid4()),
        "url": articleURL,  # Url of the article
        "title": title,  # The article's titled
        "summary": summaryResult,  # Summarized text
        "summaryTime": summaryTime,  # Total summary time
        "contentReducedBy": contentReducedBy,  # Percent reduced by
        "sentences": sentences,  # Number of sentences
        "keywords": keywords,  # Keywords
    }

    return summaryData


def run_server():
    app.run(debug=True)


if __name__ == "__main__":
    run_server()
