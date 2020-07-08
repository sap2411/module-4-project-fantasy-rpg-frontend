import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Game from './components/Game.js';
import About from './components/About.js';
import CreateAccount from './components/CreateAccount';


function App() {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }
  
  const Navbar = () => {return <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Play</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to="/createAccount"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Create Account</NavLink>
    </div>; }

  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Game}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/createAccount" component={CreateAccount} />
    </div>
  </Router>
  );
}


export default App;
