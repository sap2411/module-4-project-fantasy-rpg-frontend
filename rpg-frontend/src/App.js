import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Game from './components/Game.js';
import Login from './components/Login.js';
import About from './components/About.js';
import CharacterSelect from './components/game_route/CharacterSelectPage.js';



function App() {

  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Game}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/character-select" component={CharacterSelect} />
    </div>
  </Router>
  );
}


export default App;
