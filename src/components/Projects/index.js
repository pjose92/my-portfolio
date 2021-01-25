import React from 'react';
import Title from '../SectionTitle';
// import Layout from './Layout';
import Wrapper from '../SectionWrapper';

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledComponents, SiMaterialUi, SiReactrouter } from "react-icons/si";

import gameOfLife from "../../Assets/theGameofLife.png"
import instaClone from "../../Assets/instaClone.png"
import reactTodo from "../../Assets/reactTodo.png"
import rickAndMorty from "../../Assets/rickAndMorty.png"


import '../Projects/projects.css'

const Projects = () => {
  return (
    <Wrapper className="projects-home">
      <div className="subtitle">
        <Title text="Projects" />
      </div>

      <div className="route-project-card">
        <div className="project-block-1">
          <div className="project-name-img">            
            <h1>The Game of Life</h1>
            <img src={gameOfLife} alt="The Game of Life"/>
          </div>
          <div className="links">
            <a href="https://github.com/pjose92/game-of-life">
              Github 
            </a>
            <a href="https://thegame-of-life.netlify.app/">
              Live 
            </a>
          </div>
        </div>
        <div className="project-block-2">
          <div className="description">
            <p>Built a web representation of John Conway's Game of Life</p>
          </div>
          <div className="Libaries">
            <div className="libaries-subtitle">
              <FaReact />
              <IoLogoJavascript />
              <SiStyledComponents />
            </div>
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="route-project-card">
        <div className="project-block-1">
          <div className="project-name-img">
            <h1>Instagram Clone</h1>
            <img src={instaClone} alt="instagram clone" />
          </div>
          <div className="links">
            <a href="https://github.com/pjose92/React-Components-Insta-Clone/tree/jose-Perezguerrero">
              Github 
            </a>
            <a href="https://cloneinsta.netlify.app/">
              Live 
            </a>
          </div>
        </div>
        <div className="project-block-2">
          <div className="description">
            <p>Built an Instagram clone page using React. Information comes from a dummy-data file not from an actual user account.</p>
          </div>
          <div className="Libaries">
            <div className="libaries-subtitle">
              <p>Technologies used:</p>
            </div>
            <div className="libaries-icons">
              <FaReact />
            </div>
          </div>
        </div>
      </div>
      {/* thrid Project */}
      <div className="route-project-card">
        <div className="project-block-1">
          <div className="project-name-img">
            <h1>Rick and Morty Fan Page</h1>
            <img src={rickAndMorty} alt="rick and morty" />
          </div>
          <div className="links">
            <a href="https://github.com/pjose92/Sprint-Challenge-Single-Page-Apps/tree/jose-Perezguerrero">
              Github 
            </a>
            <a href="https://rickandmortyfanapp.netlify.app/">
              Live 
            </a>
          </div>
        </div>
        <div className="project-block-2">
          <div className="description">
            <p>A Single Page Application with Client-Side Routing built in a three hour sprint challenge at Lambda School.</p>
          </div>
          <div className="Libaries">
            <div className="libaries-subtitle">
              <FaReact />
              <SiReactrouter />
            </div>
          </div>
        </div>
      </div>
      
      {/* fifth Project */}
      <div className="route-project-card">
        <div className="project-block-1">
          <div className="project-name-img">
            <h1>ToDo Web App</h1>
            <img src={reactTodo} alt="react to do" />
          </div>
          <div className="links">
            <a href="https://github.com/pjose92/React-Todo/tree/jose-Perezguerrero">
              Github 
            </a>
            <a href="https://doreact.netlify.app/">
              Live 
            </a>
          </div>
        </div>
        <div className="project-block-2">
          <div className="description">
            <p>To-Do app developed in React with class components. The App can add, cross off and clear all the list after completed. With localStorge you can refresh the page and your list will still be there.</p>
          </div>
          <div className="Libaries">
            <div className="libaries-subtitle">
              <FaReact />
              <SiMaterialUi />
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default Projects;