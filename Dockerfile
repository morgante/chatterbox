FROM python:2-onbuild

CMD [ "gunicorn -k flask_sockets.worker hello:app" ]
