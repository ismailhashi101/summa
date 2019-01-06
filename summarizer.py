import urllib2
from bs4 import BeautifulSoup
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from string import punctuation
from nltk.probability import FreqDist
from heapq import nlargest
from collections import defaultdict


def getTextWaPo(artUrl):
    if 'wired.com' not in artUrl and 'washingtonpost.com' not in artUrl:
        return False
    try:
        page = urllib2.urlopen(artUrl).read().decode('utf8', 'ignore')
    except:
        return False
    soup = BeautifulSoup(page,'lxml')
    text = ' '.join(map(lambda p:p.text, soup.find_all('article')))
    text = text.encode('ascii', errors='replace').replace("?", " ")
    return text


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