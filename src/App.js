import React from 'react';
import  'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Thanks from './components/Thanks'
import Qualifications from './components/Qualifications/Qualifications';

function App() {
  console.log(window.location.pathname)
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Skills />
      <br />
      <Projects />
      <br />
      <Qualifications />
      <br />
      <Footer />
      <Contact />
      <Thanks />
    </div>
  );
}

export default App;
