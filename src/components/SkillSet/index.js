import React, { Component } from 'react';
import Title from '../SectionTitle';
// import Layout from './Layout';
import Wrapper from '../SectionWrapper';

import "./App.css";
import { IconContext } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaPython, FaLess, FaBootstrap, FaNode, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPostman, SiPostgresql } from "react-icons/si";
import { DiGit } from "react-icons/di";



class SkillSet extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }
  onEnter() {
    this.setState({ active: true });
  }
  onLeave() {
    this.setState({ active: false });
  }
  render() {
    return (
      <Wrapper id="skillset">
        <Title text="Skills Set" />

        <div className="icons-about">
            <IconContext.Provider value={{ size: "2.5em", color: "#474242" }}>
              <FaHtml5 />
              <FaCss3Alt />
              <FaLess />
              <FaBootstrap />
              <IoLogoJavascript />
              <FaReact />
            </IconContext.Provider>
          </div>

          <div className="icons-about">
            <IconContext.Provider value={{ size: "2.5em", color: "#474242" }}>
              <FaDatabase />
              <FaPython />
              <FaNode />
              <SiPostman />
              <SiPostgresql />
            </IconContext.Provider>
          </div>

          <div className="icons-about">
            <IconContext.Provider value={{ size: "2.5em", color: "#474242" }}>
              <FaGithub />
              <DiGit />
            </IconContext.Provider>
          </div>
      </Wrapper>
    );
  }
}

export default SkillSet;
