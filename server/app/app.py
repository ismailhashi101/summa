import json
import time
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from app import summarizer

app = Flask(__name__)
CORS(app)

# summarizer.setup_environment()

@app.route('/summarize', methods=['POST'])
def summarizeText():
    start = time.time()
    requestData = request.get_json()
    data = requestData['summary']
   
    articleURL = data['url']
    textBody = data['summaryBox']
    sentences = data['sentences']

    if(articleURL):
        text = summarizer.getText(articleURL)
        strippedText = summarizer.stripHtml(text)
    
    if(textBody): summaryText = textBody
    else: summaryText = strippedText

    end = time.time()
    finalTime = end - start   

    summaryResult = summarizer.spacy_summarizer(summaryText)
    summary = summarizer.getSummary(summaryResult, finalTime)

    return jsonify(summary)

# @app.route('/summaries', methods=['GET'])
# def getSummaries():
#     summaries = summarizer.getSummaries()
#     return jsonify(summaries)
    
def run_server():
    app.debug = True

if __name__ == "__main__":
    run_server()


# # https://www.washingtonpost.com/news/energy-environment/wp/2017/02/22/oklahoma-attorney-generals-office-releases-7500-pages-of-emails-between-scott-pruitt-and-fossil-fuel-industry/
# # [
# #   "Thousands of emails detail EPA head’s close ties to fossil fuel industry",
# #   "“I sent the letter today,” the deputy solicitor general wrote the following day.",
# #   "In one example, Pruitt was a speaker at an ALEC conference on May 3, 2013, in Oklahoma City.",
# #   "The group had sued to compel the state to release the documents under public records laws.",
# #   "Please let me know what you and General Pruitt think, or if we can help further.”",
# #   "Pruitt’s chief of staff replied: “Thanks Bill — we will take a look and start working on a draft.”",
# #   "The emails’ release comes just days after Pruitt was confirmed as the EPA’s new leader.",
# #   "Republicans forged ahead anyway, and Pruitt was confirmed by a 52-to-46 vote.",
# #   "Pruitt’s office at EPA did not at once respond to a ask for comment on Wednesday.",
# #   "On Tuesday, Pruitt addressed EPA employees for the first time as their new boss."
# # ]