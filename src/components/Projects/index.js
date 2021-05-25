import React from 'react';
import Title from '../SectionTitle';
import Wrapper from '../SectionWrapper';

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMaterialUi, SiReactrouter } from "react-icons/si";

import spLandscape from "../../Assets/spLandscape.png"
import instaClone from "../../Assets/instaClone.png"
import reactTodo from "../../Assets/reactTodo.png"
import rickAndMorty from "../../Assets/rickAndMorty.png"
import magicScroll from "../../Assets/Magic-Scroll.png"

import '../Projects/projects.css'

const Projects = () => {
  return (
    <Wrapper id="projects" className="projects-home">
      <div className="subtitle">
        <Title text="Projects"/>
      </div>

      <div className="route-project-card">
        <div className="project-block-1">
          <div className="project-name-img">            
            <h1>SP Landscaping</h1>
            <img src={spLandscape} alt="The SP Landscape"/>
          </div>
          <div className="links">
            <a href="https://github.com/pjose92/project">
              Github 
            </a>
            <a href="https://www.thesplandscaping.com/">
              Live 
            </a>
          </div>
        </div>
        <div className="project-block-2">
          <div className="description">
            <p>Re-Designed and deployed a one-page website for a landscaping business. Met all the requirements that the business owner needed.</p>
          </div>
          <div className="libraries">
            <div className="libraries-subtitle">
              <p>Technologies used:</p>
            </div>
            <div className="libraries-icons">
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
            </div>
          </div>
        </div>
      </div>

      <div className="route-project-card">
        <div className="project-block-1">
          <div className="project-name-img">            
            <h1>Magic Scroll</h1>
            <img src={magicScroll} alt="Magic Scroll"/>
          </div>
          <div className="links">
            <a href="https://github.com/pjose92/Apple-Like-Magic-Scroll">
              Github 
            </a>
            <a href="https://magicscrolling.netlify.app/">
              Live 
            </a>
          </div>
        </div>
        <div className="project-block-2">
          <div className="description">
            <p>Built and deployed a clone of Apple Airpods Pro magic sroll effect. Desktop only.</p>
          </div>
          <div className="libraries">
            <div className="libraries-subtitle">
              <p>Technologies used:</p>
            </div>
            <div className="libraries-icons">
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
            </div>
          </div>
        </div>
      </div>

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
            <p>Developed an Instagram clone page using React. Information comes from a dummy-data file not from an actual user account.</p>
          </div>
          <div className="libraries">
            <div className="libraries-subtitle">
              <p>Technologies used:</p>
            </div>
            <div className="libraries-icons">
              <FaReact />
            </div>
          </div>
        </div>
      </div>

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
          <div className="libraries">
            <div className="libraries-subtitle">
              <p>Technologies used:</p>
            </div>
            <div className="libraries-icons">
              <FaReact />
              <SiReactrouter />
            </div>
          </div>
        </div>
      </div>
      
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
          <div className="libraries">
            <div className="libraries-subtitle">
              <p>Technologies used:</p>
            </div>
            <div className="libraries-icons">
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