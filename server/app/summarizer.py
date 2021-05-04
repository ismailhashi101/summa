import requests
import nltk
import spacy 
import heapq 
import urllib.request as urllib2 

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from bs4 import BeautifulSoup

from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation

from uuid import uuid4


def setup_environment():
    """Download required resources."""
    nltk.download('punkt')
    print('Completed resource downloads.')

def getText(Url):
    try:
        html_text = requests.get(Url).text
    except Exception as e:
        print(e.reason)
        print("Unable to get URL. Please make sure it's valid and try again.") 
        return False 
    return html_text

def stripHtml(text):
    soup = BeautifulSoup(text, "html.parser")
    fetched_text = ' '.join(map(lambda p:p.text, soup.find_all('p')))
    return fetched_text

def nltk_summarizer(raw_text):
	stopWords = set(stopwords.words("english"))
	word_frequencies = {}  
	for word in nltk.word_tokenize(raw_text):  
	    if word not in stopWords:
	        if word not in word_frequencies.keys():
	            word_frequencies[word] = 1
	        else:
	            word_frequencies[word] += 1

	maximum_frequncy = max(word_frequencies.values())

	for word in word_frequencies.keys():  
	    word_frequencies[word] = (word_frequencies[word]/maximum_frequncy)

	sentence_list = nltk.sent_tokenize(raw_text)
	sentence_scores = {}  
	for sent in sentence_list:  
	    for word in nltk.word_tokenize(sent.lower()):
	        if word in word_frequencies.keys():
	            if len(sent.split(' ')) < 30:
	                if sent not in sentence_scores.keys():
	                    sentence_scores[sent] = word_frequencies[word]
	                else:
	                    sentence_scores[sent] += word_frequencies[word]



	summary_sentences = heapq.nlargest(7, sentence_scores, key=sentence_scores.get)
	summary = ' '.join(summary_sentences)   
	return summary

def spacy_summarizer(raw_docx):
    nlp = spacy.load("en_core_web_sm")

    raw_text = raw_docx
    docx = nlp(raw_text)
    stopwords = list(STOP_WORDS)
    # Build Word Frequency # word.text is tokenization in spacy
    word_frequencies = {}  
    for word in docx:  
        if word.text not in stopwords:
            if word.text not in word_frequencies.keys():
                word_frequencies[word.text] = 1
            else:
                word_frequencies[word.text] += 1


    maximum_frequncy = max(word_frequencies.values())

    for word in word_frequencies.keys():  
        word_frequencies[word] = (word_frequencies[word]/maximum_frequncy)
    # Sentence Tokens
    sentence_list = [ sentence for sentence in docx.sents ]

    # Sentence Scores
    sentence_scores = {}  
    for sent in sentence_list:  
        for word in sent:
            if word.text.lower() in word_frequencies.keys():
                if len(sent.text.split(' ')) < 30:
                    if sent not in sentence_scores.keys():
                        sentence_scores[sent] = word_frequencies[word.text.lower()]
                    else:
                        sentence_scores[sent] += word_frequencies[word.text.lower()]


    summarized_sentences = heapq.nlargest(7, sentence_scores, key=sentence_scores.get)
    final_sentences = [ w.text for w in summarized_sentences ]
    summary = ' '.join(final_sentences)
    return summary

summaries = []
def addSummary(summaryData):
    summaries.append(summaryData)

def getSummary(articleURL, summaryResult, sentences):
    summaryData = {
        'id': str(uuid4()), 
        'text': summaryResult,
        'url': articleURL,
        'sentences': sentences
        }
    return summaryData

def getSummaries():
    return summaries