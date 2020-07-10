import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Game from './components/Game.js';
import GameSaves from './components/game_saves/GameSavesContainer.js'
import About from './components/About.js';
import LogInForm from './components/LogInForm.js'
import AccountForm from './components/AccountForm.js'

function App() {
  // Backend URL
  const backendURL = 'http://localhost:3001'
  const logInURL = backendURL + '/login'
  const usersURL = backendURL + '/users'
  const charactersURL = backendURL + '/characters'
  // const abilitiesURL = backendURL + '/abilities'
  const gameSavesURL = backendURL + '/game_saves'
  // const modifiersURL = backendURL + '/modifiers'

  // Setup state via hooks
  const [user, setUser] = useState()
  const [loaded, setLoaded] = useState()
  const [logInFormErrors, setLogInFormErrors] = useState()
  const [characters, setCharacters] = useState([])

  // Fetch characters upon component load
  useEffect(() => {
    fetchCharacters()
  }, [])

  // Login user and update state
  const logIn = (userEmail, redirectPath) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: userEmail})
    }
    fetch(logInURL, options).then(resp => resp.json())
    .then(response => {
      if (response.errors) {
          // Set error messages
          setLogInFormErrors(response.errors)
      } else {
          // Clear error messages
          setLogInFormErrors()
          // Fake log in user via state
          setUser(response.data)
        }
      })
    }


  // Refresh logged in user data
  const refreshUser = () => {
    logIn(user.attributes.email)
  }

  // Logout user and update state
  const logOut = () => {
    setUser()
  }

  // Fetch characters and update state
  const fetchCharacters =() => {
    fetch(charactersURL)
    .then(resp => resp.json())
    .then(json => setCharacters(json.data))
  }

  const loadGame = (file=null) => {
    setLoaded(file)
  }

  return (
    <Router>
      <div>
        <Navbar user={user} loadGame={loadGame} logOut={logOut}/>
        <Route exact path="/" component={About} />
        <Route exact path="/new-game" component={() => <Game load={loaded} characters={characters} user={user}/>} />
        <Route exact path="/saved-games" component={() => <GameSaves loadGame={loadGame} gameSavesURL={gameSavesURL} game_saves={user.attributes.game_saves} characters={characters} refreshUser={refreshUser} />} />
        <Route exact path="/log-in" component={() => <LogInForm logIn={logIn} user={user} formErrors={logInFormErrors}/>} />
        <Route exact path="/create-account" component={() => <AccountForm usersURL={usersURL} logIn={logIn} formErrors={logInFormErrors}/>} />
        <Route exact path="/edit-account" component={() => <AccountForm usersURL={usersURL} user={user} logIn={logIn} logOut={logOut}/>} />
      </div>
    </Router>
  );
}


export default App;
