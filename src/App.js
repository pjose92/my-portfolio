import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
    <NavBar />
      <header className="App-header">
        <h1>Hello, I'm Jose Perez</h1>
        <h2>I am a FullStack Web Developer from Chicago, IL</h2>
        <h3>My portfolio is under construction</h3>
      </header>
    </div>
  );
}

export default App;
