import React, { Component } from 'react';
import Title from '../SectionTitle';
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
              <div>
                <FaHtml5 />
                <p>HTML</p>
              </div>

              <div>
                <FaCss3Alt />
                <p>CSS</p>
              </div>

              <div>
                <FaLess />
                <p>Less</p>
              </div>
              
              <div>
                <FaBootstrap />
                <p>Bootstrap</p>
              </div>
            </IconContext.Provider>
          </div>

          <div className="icons-about">
            <IconContext.Provider value={{ size: "2.5em", color: "#474242" }}>
              
              <div>
                <IoLogoJavascript />
                <p>JavaScript</p>
              </div>

              <div>
                <FaReact />
                <p>React</p>
              </div>
              
              
              <div>
                <FaDatabase />
                <p>Database</p>
              </div>

              <div>
                <FaPython />
                <p>Python</p>
              </div>
            </IconContext.Provider>
          </div>

          <div className="icons-about">
            <IconContext.Provider value={{ size: "2.5em", color: "#474242" }}>
                            
              <div>
                <FaNode />
                <p>Node.js</p>
              </div>

              <div>
                <SiPostman />
                <p>Postman</p>
              </div>

              <div>
                <SiPostgresql />
                <p>PostgreSQL</p>
              </div>

              <div>
                <FaGithub />
                <p>GitHub</p>
              </div>
            </IconContext.Provider>
          </div>

          <div className="icons-about">
            <IconContext.Provider value={{ size: "2.5em", color: "#474242" }}>
              <div>
                <DiGit />
                <p>Git</p>
              </div>
            </IconContext.Provider>
          </div>
      </Wrapper>
    );
  }
}

export default SkillSet;
