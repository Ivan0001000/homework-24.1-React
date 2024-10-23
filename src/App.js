import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>StarWars Info</h1>
      </header>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
