import React, { useState } from 'react';
import Header from './components/Header/index';

// import styled from "styled-components";


import Nav from "./components/Menu/NavBar";
import About from './components/About/index';
import SkillSet from './components/SkillSet/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';


// const Cursor = styled.div`
//   height: 30px;
//   width: 30px;
//   border-radius: 50%;
//   border: 1.5px solid black;
//   position: absolute;
// `;

const App = () => {


  // ref for custom cursor
  // const posRef = useRef(null);

  // const cursor = e => {
  //   const { clientX = 0, clientY = 0 } = e;

  //   posRef.current.style.left = clientX - 15 + "px";
  //   posRef.current.style.top = clientY - 15 + "px";

  //   console.log(clientX, clientY);
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", cursor);
  //   return () => window.removeEventListener("mousemove", cursor);
  // }, []);

  const [navbarOpen, setnavbarOpen] = useState(false);
  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };

  return (
    
    <div>
      {/* <Cursor ref={posRef} /> */}

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