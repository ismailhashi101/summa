from summarizer import *
from flask import Flask, render_template, request
import logging

articleURL = "https://www.washingtonpost.com/news/energy-environment/wp/2017/02/22/oklahoma-attorney-generals-office-releases-7500-pages-of-emails-between-scott-pruitt-and-fossil-fuel-industry/"
#text = getTextWaPo(articleURL)

#logger = logging.basicConfig(filename='logfile.log', level=logging.INFO)
app = Flask(__name__)


@app.route('/')
def send_form():
    return render_template('main.html')


#@app.route('/abstres', methods=['POST'])
#def send_data():
    #3artUrl = request.form['artUrl']
    #text = getTextWaPo(artUrl)
    #if not text:
        #return "that wasn't an acceptable url buddy"
    #return summarize(text)


def run_server():
    app.debug = True


if __name__ == "__main__":
    run_server()