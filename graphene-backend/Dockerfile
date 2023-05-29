FROM python:3

COPY . .
RUN pip install -r requirements.txt

CMD ["flask", "--app", "app.main", "run", "--host", "0.0.0.0", "--port", "8000", "--debug"]

EXPOSE 8000
