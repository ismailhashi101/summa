# Summa

## Summarizes your articles, splitting the most important sentences and ranking a sentence based on importance.

## Summa is a web app using advanced NLP algorithms to automatically optimize and summarize your notes, texts and courses. You can also use summa to correct, translate and export your essays to PDFs.

<!-- //add logo.png to github -->
<!-- <br>
<p align="center">
<img src="logo.svg" height="100">
</p>
<br> -->

You can run the dev server by doing:

````bash
# Before you work on your project, download the latest version of Python

# In the project directory, you can run:

cd server

# Then activate the corresponding environment:

python3 -m venv venv
. venv/bin/activate

# Install Flask
## Within the activated environment, use the following command to install Flask:

pip install Flask

# Flask is now installed.

export FLASK_APP=app.py
flask run
````

You can run the dev client by doing:

````bash
# Before you work on your project, download the latest version of npm

# In the project directory, you can run:

cd client

# Install dependencies

npm install

# Start client
npm start

# Runs the app in the development mode.\
# Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

````

You can also us it as an API by starting the prod version and making post requests to [localhost:5000/api/](localhost:5000/api/) :

#### Params:
* text: string (required)
* title: string (required)
* correct: true / false
* translation: none / french / spanish / german

Please don't hesitate to contribute by doing a PR!