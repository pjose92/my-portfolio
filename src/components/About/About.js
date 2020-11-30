import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Mailto from 'react-protected-mailto'
import PDF from "../About/josePFrontEnd.pdf"


const Wrapper = styled.p`
  width: 70%;
  line-height: 1.6;
  @media (max-width: 876px) {
    width: 100%;
    order: 1;
  }
`;

const SkillsetLink = styled.span`
  text-decoration: underline;
  color: dodgerblue;
  cursor: pointer;
`;

const Paragraph = props => (
  <Wrapper active={props.active}>
    Hello I'm Jose and welcome to my portfolio. I am studying Full-Stack Web Development and Computer Science at Lambda School from Chicago, IL. My passion
    is coding and if I'm not moving, growing, or learning then I make sure to find a way to do so. I am eager to 
    create web solutions that inspire, educate, and empower people. I love bringing ideas to life and I'm never afraid of taking on a new challenge.
    Check my {' '}
    <Link to="skillset" spy={true} smooth={true}>
      <SkillsetLink>full skills set here</SkillsetLink>
    </Link>{' '}
    and be sure to check out my{' '}
    <a
      href="https://github.com/pjose92"
      // target="_blank"
      style={{ color: 'dodgerblue' }}
    >
      GitHub
    </a>{' '}
    for my projects.

    <br />
    <br />
    <br />
    Please click <a
      href= {PDF}
      // target="_blank"
      style={{ color: 'dodgerblue' }}
    >
      here
    </a>{' '} for my resume.
    <br />
    Email me at <Mailto
      email='pjose14.jp38@yahoo.com'
      headers={
        {subject:'Career Opportunity'}
      }/>
  </Wrapper>
);

Paragraph.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Paragraph;
