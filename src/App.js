import React from 'react';
import Header from './components/Header/index';

import Toolbar from "./components/Menu/Toolbar";
import SideDrawer from "./components/Menu/SideDrawer";
import Backdrop from "./components/Menu/Backdrop";

import About from './components/About/index';
import SkillSet from './components/SkillSet/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';






const App = () => (
  <div>
    <Header />
    <About />
    <SkillSet />
    <Projects />
    {/* <Contact /> */}
    <Footer />
  </div>
);

export default App;
