import React, { useState } from 'react';
import Header from './components/Header/index';

import Nav from "./components/Menu/NavBar";
import About from './components/About/index';
import SkillSet from './components/SkillSet/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';

const App = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <Header />
      <Nav navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <About />
      <Projects />
      <SkillSet />
      <Footer />
    </div>
  );
};

export default App;