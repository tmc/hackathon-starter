// @ts-nocheck -- this is necessary because initialSubscriptionEndpoint is not in the current latest release of the apollo sandbox.
import React from 'react';
import './GraphQLSandbox.css';

import { ApolloSandbox } from  '@apollo/sandbox/react';

const initialDocument = `query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    username
    description
  }
}`;

const initialVariables = {
  userId: '1',
};

function GraphQLSandbox() {
  return (
    <div className="App">
      foo bar
        <div className="GraphQLSandbox">
          <ApolloSandbox
            initialSubscriptionEndpoint="ws://localhost:8080/graphql"
            persistExplorerState={true}
            initialState={{
              document: initialDocument,
              variables: initialVariables,
            }}
          />
        </div>
    </div>
  );
}

export default GraphQLSandbox;
