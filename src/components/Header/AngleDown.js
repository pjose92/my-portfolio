import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  height: 60px;
  width: 100vw;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 580px) {
    display: flex;
  }
`;

const Icon = styled.span`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border: 2px white solid;
  border-radius: 30px;
  &:hover {
    color: #64ffda;
    border-color: #64ffda;
  }
`;

const AngleDown = () => (
  <Wrapper>
    <Link to="about" smooth={true} spy={true}>
      <Icon className="fa fa-angle-down" />
    </Link>
  </Wrapper>
);

export default AngleDown;