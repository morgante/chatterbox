"""
Backend Chat server
"""

import redis
import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sockets import Sockets
from chatterbox import Chatterbox

app = Flask(__name__)
app.debug = True

box = Chatterbox()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/inbox/<key>")
def inbox(key):
    session = box.authenticate(key)

    if session:
        return "Welcome back"
    else:
        return redirect(url_for("index"))

@app.route("/join", methods=["POST"])
def join():
    registration = box.register_user(request.form['name'])

    if registration:
        return redirect(url_for("inbox", key=registration))
    else:
        return "Sorry, that username already exists."

if __name__ == "__main__":
    app.run()
