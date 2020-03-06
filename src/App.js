import React from 'react';
import Header from './components/Header/index';

import Nav from "./components/Menu/NavBar";

import About from './components/About/index';
import SkillSet from './components/SkillSet/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';


const App = () => (
  <div>

    <Header />
    <Nav />
    <About />
    <SkillSet />
    <Projects />
    <Footer />
  </div>
);

export default App;
