import json
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from app import summarizer

app = Flask(__name__)
CORS(app)

# summarizer.setup_environment()

@app.route('/summarize', methods=['POST'])
def summarizeText():
    requestData = request.get_json()
    data = requestData['summary']
    summary = data[len(data) - 1]

    articleURL = summary['url']
    textBody = summary['summaryBox']
    sentences = summary['sentences']

    if(articleURL):
        text = summarizer.getText(articleURL)
        strippedText = summarizer.stripHtml(text)

    if(textBody): 
        summaryText = textBody
    else:
        summaryText = strippedText

    summaryResult = summarizer.spacy_summarizer(summaryText)
    summary = summarizer.getSummary(articleURL, summaryResult, sentences)
    summarizer.addSummary(summary)

    return jsonify(summary)

@app.route('/summaries', methods=['GET'])
def getSummaries():
    summaries = summarizer.getSummaries()
    return jsonify(summaries)
    

# @app.route('/analyze',methods=['GET','POST'])
# def analyze():
# 	start = time.time()
# 	if request.method == 'POST':
# 		rawtext = request.form['rawtext']
# 		final_reading_time = readingTime(rawtext)
# 		final_summary = text_summarizer(rawtext)
# 		summary_reading_time = readingTime(final_summary)
# 		end = time.time()
# 		final_time = end-start
# 	return render_template('index.html',ctext=rawtext,final_summary=final_summary,final_time=final_time,final_reading_time=final_reading_time,summary_reading_time=summary_reading_time)

# @app.route('/analyze_url',methods=['GET','POST'])
# def analyze_url():
# 	start = time.time()
# 	if request.method == 'POST':
# 		raw_url = request.form['raw_url']
# 		rawtext = get_text(raw_url)
# 		final_reading_time = readingTime(rawtext)
# 		final_summary = text_summarizer(rawtext)
# 		summary_reading_time = readingTime(final_summary)
# 		end = time.time()
# 		final_time = end-start
# 	return render_template('index.html',ctext=rawtext,final_summary=final_summary,final_time=final_time,final_reading_time=final_reading_time,summary_reading_time=summary_reading_time)

def run_server():
    app.debug = True

if __name__ == "__main__":
    run_server()


#Paste an article, text or essay in this box and hit summarize; we'll return a shortened copy for you to read.
#You can also summarize PDF and TXT documents by uploading a file or summarize online articles and webpages by pasting the URL below...

# https://www.washingtonpost.com/news/energy-environment/wp/2017/02/22/oklahoma-attorney-generals-office-releases-7500-pages-of-emails-between-scott-pruitt-and-fossil-fuel-industry/
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