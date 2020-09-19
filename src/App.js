import React from 'react';
import Header from './components/header.jsx';
import Hero from './sections/hero';
import About from './sections/about';
import Skill from './sections/skill';
import "./css/index.css";
function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <About />
     <Skill />
    </div>
  );
}

export default App;
