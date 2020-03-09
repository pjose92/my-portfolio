import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../../Assets/Coverr.jpeg';
import MainText from './MainText';
import SocialMediaLinks from './SocialMediaLinks';
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
  background: url(${background}) no-repeat center center fixed;  
  -webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
  background-size: cover;
  @media only screen and (min-width : 480px) and (max-width : 820px) {
    background: url(${background}) no-repeat center center fixed;  
  }
`;

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
          <SocialMediaLinks />
          <AngleDown />
        </IconsWrapper>
      </Outer>
    );
  }
}

export default Header;
