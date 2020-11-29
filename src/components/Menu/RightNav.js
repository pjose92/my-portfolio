import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  z-index: 10;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    color: black;
    font-size: 16px;
  }
  a: hover {
      color: #04c2c9;
      font-size: 18px;

  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: white;
      font-size: 16px;
    }
    a: hover {
        color: #04c2c9;
        font-size: 18px;

    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skillset">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
    </Ul>
  );
};

export default RightNav;
