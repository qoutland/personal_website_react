import React from 'react';
import  'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Skills />
      <br />
      <Projects />
      <br />
      <br />
    </div>
  );
}

export default App;
