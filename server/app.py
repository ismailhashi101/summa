import time

from flask import Flask, request, jsonify
from flask_cors import CORS

from summarize import (
    setup_environment,
    getText,
    getDomainName,
    getKeywords,
    summarizeTextFromUrl,
    getSummaryTime,
    getSummary,
    contentReducedBy,
)

app = Flask(__name__)
CORS(app)

setup_environment()


@app.route("/summarize", methods=["POST"])
def summarizeText():
    start = time.time()

    requestData = request.get_json()
    data = requestData["summary"]

    articleURL = data["url"]
    textBody = data["summaryBox"]
    sentences = data["sentences"]

    if articleURL:
        title, strippedText = getText(articleURL)

    if textBody:
        summaryText = textBody
    else:
        summaryText = strippedText

    shortUrl = getDomainName(articleURL)
    keywords = getKeywords(summaryText)
    summarizedSentences, summarizedText = summarizeTextFromUrl(
        articleURL, int(sentences)
    )
    end = time.time()
    summaryTime = getSummaryTime(start, end)
    contentReducedPercentage = contentReducedBy(summaryText, summarizedText)
    summary = getSummary(
        shortUrl,
        title,
        summarizedSentences,
        summaryTime,
        contentReducedPercentage,
        sentences,
        keywords,
    )

    return jsonify(summary)


def run_server():
    app.run(debug=True)


if __name__ == "__main__":
    run_server()
