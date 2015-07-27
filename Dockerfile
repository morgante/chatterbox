FROM python:2-onbuild

EXPOSE 8000

CMD gunicorn index:app -k flask_sockets.worker -b 0.0.0.0:8000
