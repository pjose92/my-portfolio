import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// import Mailto from 'react-protected-mailto'
import PDF from '../About/PerezJoseFrontEnd.pdf'

const Button = styled.a`
  background-color: dodgerblue;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: white;
  margin: 3%;
`;

const Wrapper = styled.p`
  width: 20% 70%;
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
    Hello I'm Jose and welcome to my portfolio. I am a Full-Stack Web Developer with a high interest in Front End Development from Chicago, IL. My passion
    is coding and if I'm not moving, growing, or learning then I make sure to find a way to do so. I am eager to 
    create web solutions that inspire, educate, and empower people. I love bringing ideas to life and I'm never afraid of taking on a new challenge.
    Check my {' '}
    <Link to="skillset" spy={true} smooth={true}>
      <SkillsetLink>full skills set here</SkillsetLink>
    </Link>{' '}
    and be sure to check out my{' '}
    <a
      href="https://github.com/pjose92"
      style={{ color: 'dodgerblue' }}
    >
      GitHub
    </a>{' '}
    for my projects.

    <br />
    <br />
    <br />
    <Button  
      href={PDF}
    >
      Resume
    </Button>
    <Button
      href='mailto:pjose14.jp38@yahoo.com'>
        Email
    </Button>
  </Wrapper>
);

Paragraph.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Paragraph;