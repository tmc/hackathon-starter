import os
from flask import Flask
from flask_graphql import GraphQLView
from opentelemetry.instrumentation.flask import FlaskInstrumentor

from .schema import schema
from .telemetry import otlp_endpoint
print("OTLP Endpoint: ", otlp_endpoint)

app = Flask(__name__)
app.debug = True
print("starting instrumentation")
FlaskInstrumentor().instrument_app(app)
print("done starting instrumentation")

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True # for having the GraphiQL interface
    )
)

if __name__ == '__main__':
    app.run(
        port=os.environ.get('PORT', 8000)
    )
