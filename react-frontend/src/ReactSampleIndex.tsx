import React from 'react';

import ExampleComponent from './ExampleComponent';
import ExampleCompletion from './ExampleCompletion';

function ReactSampleIndex() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/ReactSampleIndex.tsx</code> and save to reload.
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

export default ReactSampleIndex;
