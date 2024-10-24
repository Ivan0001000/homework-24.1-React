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

      <div className='img-wrapp'>
        <img src="https://i0.wp.com/bgn2018media.s3.amazonaws.com/wp-content/uploads/2017/09/29000545/sw-the-last-jedi-tall-B.jpg?fit=1536%2C864&ssl=1" alt="Star Wars" className="banner"></img>
      </div>
      
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
