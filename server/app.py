# import time
# from flask import Flask, request, jsonify
# from flask_cors import CORS, cross_origin

# from server import summarize

from flask import Flask, request, jsonify


app = Flask(__name__)
# CORS(app)


# @app.route("/summarize", methods=["POST"])
# def summarizeText():
#     start = time.time()

#     requestData = request.get_json()
#     data = requestData["summary"]

#     articleURL = data["url"]
#     textBody = data["summaryBox"]
#     sentences = data["sentences"]

#     if articleURL:
#         title, strippedText = summarize.getText(articleURL)

#     if textBody:
#         summaryText = textBody
#     else:
#         summaryText = strippedText

#     shortUrl = summarize.getDomainName(articleURL)
#     keywords = summarize.getKeywords(summaryText)
#     summarizedSentences, summarizedText = summarize.summarizeText(
#         articleURL, int(sentences)
#     )
#     end = time.time()
#     summaryTime = summarize.getSummaryTime(start, end)
#     contentReducedPercentage = summarize.contentReducedBy(summaryText, summarizedText)
#     summary = summarize.getSummary(
#         shortUrl,
#         title,
#         summarizedSentences,
#         summaryTime,
#         contentReducedPercentage,
#         sentences,
#         keywords,
#     )

#     return jsonify(summary)

@app.route("/hello")
def hello():
    return "Hello, World!"


def run_server():
    app.run(debug=True)


if __name__ == "__main__":
    run_server()
