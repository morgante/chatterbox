"""
Backend Chat server
"""

import redis
import os
import gevent
import json
from flask import Flask, render_template, request, redirect, url_for
from flask_sockets import Sockets
from chatterbox import Chatterbox

debug = (os.getenv("DEBUG") == "true")

print "debug", debug, os.getenv("DEBUG")

app = Flask(__name__)
app.debug = debug

sockets = Sockets(app)

box = Chatterbox(os.getenv("SECRET"), redis_uri=os.getenv("REDIS_PORT_6379_TCP").replace("tcp", "redis"))

# Standard HTTP routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/inbox/<username>/<key>")
def inbox(username, key):
    session = box.authenticate(username, key)

    if session:
        return render_template("chat.html", username=username, key=key)
    else:
        return redirect(url_for("index"))

@app.route("/join", methods=["POST"])
def join():
    username = request.form['name']
    print "something", username

    registration = box.register_user(username)

    if registration:
        return redirect(url_for("inbox", username=username, key=registration))
    else:
        return "Sorry, that username already exists."

# Websocket routes
@sockets.route('/ws/inbox')
def receive(socket):
    auth = socket.receive()
    auth = json.loads(auth)

    def handle(message):
        if not socket.closed:
            socket.send(message)

    sender = box.open_inbox(auth.get("username"), auth.get("key"), handle)

    while not socket.closed:
        message = socket.receive()
        sender(message)
        gevent.sleep(0)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
