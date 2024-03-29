import requests
import nltk
import tldextract
import string
import re

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


def setup_environment():
    """Download required resources."""
    nltk.download("punkt")
    nltk.download("stopwords")
    print("Completed resource downloads.")


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
    originalTextWords = re.split(r"\W+", originalText)
    finalTextWords = re.split(r"\W+", finalText)
    originalLength = len(originalTextWords)
    summarizedLength = len(finalTextWords)
    reducedBy = originalLength - summarizedLength
    reducedPercentage = (reducedBy / originalLength) * 100
    return reducedPercentage


def getKeywords(originalText):
    keywordsString = keywords.keywords(originalText)
    res = keywordsString.split("\n")
    return res[0:10]


def getSummaryTime(initialTime, finalTime):
    return finalTime - initialTime


def summarizeTextFromUrl(url, sentence_count):
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
