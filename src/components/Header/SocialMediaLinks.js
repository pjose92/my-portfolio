import React from 'react';
import styled from 'styled-components';
// import { bounceInLeft } from 'react-animations';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-align: center;
  transition: 0.2s;
  &:hover {
    width: 80px;
    background-color: black;
  }
  @media (max-width: 876px) {
    font-size: 1.3rem;
    height: 50px;
    width: 50px;
  }

`;

const SocialMediaLinks = () => (
  <Wrapper>
    <Link
      href="#"
      target="_blank"
      className="fa fa-envelope"
    />
    <Link
      href="#"
      target="_blank"
      className="fa fa-file"
    />
    <Link
      href="#"
      target="_blank"
      className="fa fa-linkedin"
    />
    <Link
      href="#"
      target="_blank"
      className="fa fa-github"
    />
  </Wrapper>
);

export default SocialMediaLinks;
