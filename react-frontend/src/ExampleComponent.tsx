import React from 'react';
import { useState } from 'react';
import { useQuery, useSubscription } from '@apollo/client'
import './App.css';
import { graphql } from '../src/gql-gen'


// Sample Query-- the codegen does not create code that compiles if there are
// no queries registered via the 'graphql' function
const getUserQueryDocument = graphql(`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      username
      description
    }
  }
`)

const testSubscription = graphql(`
  subscription TestSubScription {
    testSubscription
  }
`)

function ExampleComponent() {
  // 'data' is typed
  const [subErrorState, setSubErrorState] = useState("");
  const { data: subData, loading: subLoading } = useSubscription(testSubscription, { variables: {}, onError: (err) => {
    setSubErrorState(err.message)
  },
  })
  const { data, loading, error, networkStatus } = useQuery(getUserQueryDocument, { variables: {"userId": 42}})
  return (
    <div style={{fontSize: 'small'}}>
      <pre>
        loading: {loading ? 'true' : 'false'}<br/>
        error: {error ? 'true' : 'false'}<br/>
        networkStatus: {networkStatus}<br/>
        data: {JSON.stringify(data)}<br/>
        <br/>
        subscription loading: {subLoading ? 'true' : 'false'}<br/>
        subscription err: {subErrorState}<br/>
        subscription data: {JSON.stringify(subData)}<br/>
      </pre>
    </div>
  );
}

export default ExampleComponent;
