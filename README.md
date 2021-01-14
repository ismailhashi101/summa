# Summa

## Automatically summarize any text!

## Summarizes your articles, splitting the most important sentences and ranking a sentence based on importance.

## Summa is a web app using advanced NLP algorithms to automatically optimize and summarize your notes, texts and courses. You can also use summa to correct, translate and export your essays to PDFs.

<!-- //add logo.png to github -->
<!-- <br>
<p align="center">
<img src="logo.png" height="100">
</p>
<br> -->

You can run the dev version by doing:
````bash
cd client

# Install dependencies
npm install

# Start dev server
npm run serve

# Open another terminal window and do:

# Go to server folder
cd server

# Start a pipenv shell
pipenv shell

# Install dependencies (using Pipenv)
sudo pipenv install --skip-lock

# Start server
python main.py

````

You can also run the prod version by doing:
````bash
cd server

# Start a pipenv shell
pipenv shell

# Install dependencies (using Pipenv)
sudo pipenv install --skip-lock

# Start server
python main.py

````
You can also us it as an API by starting the prod version and making post requests to [localhost:3000/api/](localhost:3000/api/) :

#### Params:
* text: string (required)
* title: string (required)
* correct: true / false
* translation: none / french / spanish / german

Please don't hesitate to contribute by doing a PR!