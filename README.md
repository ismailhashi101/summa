# summa

<br>
<p align="center">
<img src="/docs/images/notes.svg" height="100" width="325">
</p>
<br>



> summa was created to summarize webpages, articles and text.

summa's uses natural language processing to provide an consice way to understanding text by:

- reducing the text to only the most important sentences.
- uses a variety of techniques to find the core message of a text and extractive text summaries.
- summa splits the most important sentences and ranks them based on importance.



## Getting started


You can run the dev server by doing:

````bash
# Before you work on your project, download the latest version of Python

# In the project directory, you can run:

$ cd server

# Then activate the corresponding environment:

$ python3 -m venv venv
$ . venv/bin/activate

# Install Flask
# Within the activated environment, use the following command to install Flask:

$ pip install Flask

# Flask is now installed.

$ export FLASK_APP=app.py
$ flask run

* Running on http://127.0.0.1:5000/
````



You can run the dev client by doing:

````bash
# Before you work on your project, download the latest version of npm

# In the project directory, you can run:

$ cd client

# Install dependencies

$ npm install

# Start client

$ npm start

# Runs the app in the development mode. Open bellow in the browser.

* Running on http://localhost:3000/

````

You can also us it as an API by starting the prod version and making post requests to [localhost:5000/api/](localhost:5000/api/) :

Please don't hesitate to contribute by doing a PR!
