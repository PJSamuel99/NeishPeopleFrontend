// src/App.js

import React from 'react';
import JobList from './components/JobList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Neish People Job Listings</h1>
      </header>
      <JobList />
    </div>
  );
}

export default App;
