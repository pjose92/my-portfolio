import React, { Component } from "react";
import styled from "styled-components";
import '../Menu/style.css'


const Container = styled.nav``;


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

class Navbar extends Component {
  state = {
    opened: false
  };

  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <Container className="Navbar">
        <div className="navbar-home">
          <a href=".">
            DevJP
          </a>
          <button className="toggle" onClick={this.toggle.bind(this)}>
            <i
              className={
                (this.state.opened ? "fas fa-angle-up" : "fas fa-angle-down")
              }
            />
          </button>
        </div>
        <ul
          className={
            "navbar-links " + (this.state.opened ? "opened" : "closed")
          }
        >
          <li className="navbar-link">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-link">
            <a href="#about">About</a>
          </li>
          <li className="navbar-link">
            <a href="#skillset">Skills</a>
          </li>
          <li className="navbar-link">
            <a href="#projects">Work</a>
          </li>
        </ul>
      </Container>
    );
  }
}
export default App;
