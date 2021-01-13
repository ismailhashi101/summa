import requests
import nltk

import urllib.request as urllib2 
from bs4 import BeautifulSoup
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from string import punctuation
from nltk.probability import FreqDist
from heapq import nlargest
from collections import defaultdict

nltk.download('punkt')
#nltk.data.path.append('./nltk_data/')  # set the path

def getText(Url):
    try:
        html_text = requests.get(Url).text
    except Exception as e:
        print(e.reason)
        print("Unable to get URL. Please make sure it's valid and try again.") 
        return False 
    return html_text


def summarize(text):
    sents = sent_tokenize(text)
    words = word_tokenize(text.lower())
    customStopWords=set(stopwords.words('english')+list(punctuation))
    word_sent= [word for word in words if word not in customStopWords]
    freq = FreqDist(word_sent)
    nlargest(10, freq, key=freq.get)
    ranking = defaultdict(int)
    for i,sent in enumerate(sents):
        for w in word_tokenize(sent.lower()):
            if w in freq:
                ranking[i] += freq[w]
    sent_idx = nlargest(4, ranking, key=ranking.get)
    res = [sents[j] for j in sorted(sent_idx)]
    return ' '.join(map(str, res))


def strip_html(text):
    soup = BeautifulSoup(text, "html.parser")
    return soup.get_text()