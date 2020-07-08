import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Game from './components/Game.js';
// import About from './components/About.js';
import CreateAccount from './components/CreateAccount.js';
import LogIn from './components/LogIn.js'



function App() {
  // Backend URL
  const backendURL = 'http://localhost:3001'
  const usersURL = backendURL + '/users'
  const charactersURL = backendURL + '/characters'
  const abilitiesURL = backendURL + '/abilities'
  const gameSavesURL = backendURL + '/game_saves'
  const modifiersURL = backendURL + '/modifiers'

  // Fake login state via state hook
  const [user, setUser] = useState()

  // Login user
  const logIn = (user) => {
    setUser(user)
  }

  // Logout user
  const logOut = () => {
    setUser()
  }

  return (
    <Router>
      <div>
        <Navbar user={user} logOut={logOut}/>
        <Route exact path="/new-game" component={Game}/>
        {/* <Route exact path="/load-game" component={load game ...} /> */}
        {/* <Route exact path="/about" component={About} /> */}

        <Route exact path="/create-account" component={() => <CreateAccount usersURL={usersURL} logIn={logIn}/>} />
        <Route exact path="/Log-in" component={LogIn} />
      </div>
    </Router>
  );
}


export default App;
