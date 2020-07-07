import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Game from './components/Game.js';
import Login from './components/Login.js';
import About from './components/About.js';


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
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
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
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Login</NavLink>
    </div>; }

  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Game}/>
      <Route exact path="/about" component={About} />
    </div>
  </Router>
  );
}


export default App;
