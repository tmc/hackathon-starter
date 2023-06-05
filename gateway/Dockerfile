FROM curlimages/curl:8.1.1 as curl
FROM ghcr.io/apollographql/router:v1.20.0

COPY --from=curl /usr/bin/curl /usr/bin/curl

COPY *.graphql .
COPY *.yaml .

RUN /dist/router config schema > schema.json

EXPOSE 4000

