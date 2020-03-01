import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

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
    Hello, welcome to my portfolio, {' '}
    <Link to="skillset" spy={true} smooth={true}>
      <SkillsetLink>full skills set here</SkillsetLink>
    </Link>{' '}
    and be sure to check out my{' '}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      github
    </a>{' '}
    and{' '}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      codepen
    </a>{' '}
    for my projects.
  </Wrapper>
);

Paragraph.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Paragraph;
