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
                "fas " + (this.state.opened ? "fa-angle-up" : "fa-angle-down")
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
            <a href=".">Becoming a host</a>
          </li>
          <li className="navbar-link">
            <a href=".">Help</a>
          </li>
          <li className="navbar-link">
            <a href=".">Sign up</a>
          </li>
          <li className="navbar-link">
            <a href=".">Log in</a>
          </li>
        </ul>
      </Container>
    );
  }
}
export default App;
