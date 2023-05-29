# hackathon templates

# Dockerfile for fastapi-backend

FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

EXPOSE 8000

# --- Shared Dependencies ---

# Common build and management tool used in each template
#
# Symbols:
# - make
# - install
# - clean
# - run
# - docker-build
# - docker-run
# - docker-stop

# Common Dockerfile for creating docker images for each template
#
# Symbols:
# - FROM
# - COPY
# - RUN
# - WORKDIR
# - EXPOSE
# - CMD