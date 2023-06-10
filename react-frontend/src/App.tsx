import React from 'react';
import './App.css';

import ExampleComponent from './ExampleComponent'
import ExampleCompletion from './ExampleCompletion'

function App() {
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
        <ExampleComponent />
        <ExampleCompletion />
      </header>
    </div>
  );
}

export default App;
