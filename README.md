# ChatterBox

ChatterBox is a super simple chat service. You can check out the demo here: http://pluto.morgante.net:48380/

The ChatterBox stack uses:

* A Python (with Flask) backend
* Redis for persistence and pubsub
* React and ES6 on the frontend

One interesting attribute is that ChatterBox does not use any passwords. Instead, once you select a username, a URL for that username is generated. By bookmarking that URL, you can return to the conversation without remembering a password. 
