import React from 'react';
import { useQuery } from '@apollo/client'
import './App.css';
import { graphql } from '../src/gql'


// Sample Query-- the codegen does not create code that compiles if there are
// no queries registered via the 'graphql' function
const getUserQueryDocument = graphql(/* GraphQL */`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      description
    }
  }
`)

function App() {
  // 'data' is typed
  const { data } = useQuery(getUserQueryDocument, { variables: {"userId": 42}})
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
