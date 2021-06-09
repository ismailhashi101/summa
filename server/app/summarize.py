import requests
import spacy

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


def getText(url):
    try:
        # parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
        html_text = requests.get(url).text
    except Exception as e:
        print(e.reason)
        print("Unable to get URL. Please make sure it's valid and try again.")
        return False
    return html_text


def stripHtml(text):
    soup = BeautifulSoup(text, "html.parser")
    stripped_text = soup.get_text()
    return stripped_text


def contentReducedBy(originalText, finalText):
    originalLength = len([token.text for token in nlp(originalText)])
    summarizedLength = len([token.text for token in nlp(finalText)])
    reducedBy = originalLength - summarizedLength
    reducedPercentage = (reducedBy / originalLength) * 100
    return reducedPercentage


def getKeywords(originalText):
    res = keywords.keywords(originalText)
    # print(len(res))
    return res


def getSummaryTime(initialTime, finalTime):
    return finalTime - initialTime


def summarizeText(docx, SENTENCES_COUNT):
    parser = PlaintextParser.from_string(docx, Tokenizer("english"))
    stemmer = Stemmer(LANGUAGE)
    model = Summarizer(stemmer)
    model.stop_words = get_stop_words(LANGUAGE)
    extracted_sentences = model(parser.document, SENTENCES_COUNT)

    summary = [str(sentence) for sentence in extracted_sentences]

    # summary = []
    # for i, sentence in enumerate(extracted_sentences):
    #     summary.append(str(sentence).strip())

    print(summary)
    return summary, " ".join(summary)


def getSummary(
    articleURL,
    title,
    originalText,
    summaryResult,
    summaryTime,
    contentReducedBy,
    sentences,
    keywords,
):
    summaryData = {
        "id": str(uuid4()),
        "url": articleURL,  # URL of the article
        "title": title,  # The article's titled
        "originalText": originalText,  # original text
        "summary": summaryResult,  # summarized text
        "summaryTime": summaryTime,  # total summary time
        "contentReducedBy": contentReducedBy,  # Percent by which reduced
        "sentences": sentences,  # Number of sentences
        "keywords": keywords,  # Keywords
    }

    return summaryData
