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

@app.route("/inbox/<username>/<key>")
def inbox(username, key):
    session = box.authenticate(username, key)

    if session:
        return "Welcome back, {username}".format(username=username)
    else:
        return redirect(url_for("index"))

@app.route("/join", methods=["POST"])
def join():
    username = request.form['name']
    registration = box.register_user(username)

    if registration:
        return redirect(url_for("inbox", username=username, key=registration))
    else:
        return "Sorry, that username already exists."

if __name__ == "__main__":
    app.run()
