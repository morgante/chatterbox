FROM python:2-onbuild

CMD gunicorn index:app -b 0.0.0.0:8000
