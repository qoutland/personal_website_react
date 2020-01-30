import React from 'react';
import 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <Skills />
      <br />
      <Projects />
      <br />
      <Education />
      <Experience />
      <br />
      <Contact />
      <Thanks />
      <Footer />
    </div>
  );
}

export default App;
