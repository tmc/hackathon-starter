import os
from flask import Flask
from flask_graphql import GraphQLView

from .schema import schema

app = Flask(__name__)
app.debug = True

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
