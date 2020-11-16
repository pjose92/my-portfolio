import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../../Assets/bg1.jpeg';
import background2 from '../../Assets/pattern.png';

import MainText from './MainText';
// import SocialMediaLinks from './SocialMediaLinks';
import AngleDown from './AngleDown';


const Outer = styled.div`
  height: 100vh;
  min-height: 400px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background-color: #1c232c;
  ;
  background: url(${background}) no-repeat center center fixed; 
  background-size: cover;

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
 
`;

// @media (max-width: 380px) {
//   background: url(${background}) no-repeat center center fixed;  
//   background-size: cover;
// }


const IconsWrapper = styled.div`
  height: 100%;
  min-height: 400px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      left: '0',
      top: '0',
    };
    this.outerHovered = this.outerHovered.bind(this);
  }
  outerHovered(e) {
    this.setState({ left: `${e.pageX / 100}px`, top: `${e.pageY / 100}px` });
  }
  render() {
    return (
      <Outer id="home" onMouseMove={this.outerHovered}>
        <MainText left={this.state.left} top={this.state.top} />
        <IconsWrapper>
          {/* <SocialMediaLinks /> */}
          <AngleDown />
        </IconsWrapper>
      </Outer>
    );
  }
}

export default Header;
