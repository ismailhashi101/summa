from flask import Flask
# from summarizer import *;
# from normalize import *;
# from flask import Flask, render_template, request
import logging

import time

logger = logging.basicConfig(filename='logfile.log', level=logging.INFO)

app = Flask(__name__)

articleURL = "https://www.washingtonpost.com/news/energy-environment/wp/2017/02/22/oklahoma-attorney-generals-office-releases-7500-pages-of-emails-between-scott-pruitt-and-fossil-fuel-industry/"
# text = getText(articleURL)
# normalizedText = normalize(text)
# print(normalizedText)

# print(summarize(text))

@app.route('/time')
def hello():
    return {'time': time.time()}

def run_server():
    app.debug = True

if __name__ == "__main__":
    run_server()

#Paste an article, text or essay in this box and hit summarize; we'll return a shortened copy for you to read.
#You can also summarize PDF and TXT documents by uploading a file or summarize online articles and webpages by pasting the URL below...


# [
#   "Thousands of emails detail EPA head’s close ties to fossil fuel industry",
#   "“I sent the letter today,” the deputy solicitor general wrote the following day.",
#   "In one example, Pruitt was a speaker at an ALEC conference on May 3, 2013, in Oklahoma City.",
#   "The group had sued to compel the state to release the documents under public records laws.",
#   "Please let me know what you and General Pruitt think, or if we can help further.”",
#   "Pruitt’s chief of staff replied: “Thanks Bill — we will take a look and start working on a draft.”",
#   "The emails’ release comes just days after Pruitt was confirmed as the EPA’s new leader.",
#   "Republicans forged ahead anyway, and Pruitt was confirmed by a 52-to-46 vote.",
#   "Pruitt’s office at EPA did not at once respond to a ask for comment on Wednesday.",
#   "On Tuesday, Pruitt addressed EPA employees for the first time as their new boss."
# ]