import React from 'react';
import Header from './components/header.jsx';
import Hero from './sections/hero';
import About from './sections/about';
import Skill from './sections/skill';
import Service from './sections/service';
import Portfolio from './sections/portfolio';
import Clients from './sections/client';
import "./css/index.css";
function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <About />
     <Skill />
     <Service />
     <Portfolio />
     <Clients />
    </div>
  );
}

export default App;
