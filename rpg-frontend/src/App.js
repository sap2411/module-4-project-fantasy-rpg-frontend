import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Game from './components/Game.js';
import LoadGames from './components/game_saves/GameSavesContainer.js'
// import About from './components/About.js';
import LogIn from './components/LogIn.js'
import AccountForm from './components/AccountForm.js'



function App() {
  // Backend URL
  const backendURL = 'http://localhost:3001'
  const logInURL = backendURL + '/login'
  const usersURL = backendURL + '/users'
  const charactersURL = backendURL + '/characters'
  // const abilitiesURL = backendURL + '/abilities'
  // const gameSavesURL = backendURL + '/game_saves'
  // const modifiersURL = backendURL + '/modifiers'

  const testUser = {
    "id": "5",
    "type": "user",
    "attributes": {
      "id": 5,
      "email": "joslyn.mcdermott@hayes-schaefer.io",
      "name": "Dania Hyatt",
      "first_name": "Dania",
      "last_name": "Hyatt",
      "created_at": "2020-07-09T19:36:17.720Z",
      "updated_at": "2020-07-09T19:36:17.720Z",
      "game_saves": [
        {
          "id": 2,
          "user_id": 5,
          "character_id": 2,
          "opponent_id": 12,
          "current_round": 4,
          "created_at": "2020-07-09T19:36:18.316Z",
          "updated_at": "2020-07-09T19:36:18.316Z"
        },
        {
          "id": 7,
          "user_id": 5,
          "character_id": 5,
          "opponent_id": 11,
          "current_round": 2,
          "created_at": "2020-07-09T19:36:18.376Z",
          "updated_at": "2020-07-09T19:36:18.376Z"
        },
        {
          "id": 9,
          "user_id": 5,
          "character_id": 2,
          "opponent_id": 3,
          "current_round": 4,
          "created_at": "2020-07-09T19:36:18.396Z",
          "updated_at": "2020-07-09T19:36:18.396Z"
        }
      ]
    }
  }


  // Setup state via hooks
  const [user, setUser] = useState(testUser)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
  }, [])

  // Login user and update state
  const logIn = (user) => {
    setUser(user)
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

  return (
    <Router>
      <div>
        <Navbar user={user} logOut={logOut}/>
        <Route exact path="/new-game" component={() => <Game characters={characters} />} />
        <Route exact path="/load-game" component={() => <LoadGames game_saves={user.attributes.game_saves} characters={characters}/>} />
        {/* <Route exact path="/about" component={About} /> */}

        <Route exact path="/log-in" component={() => <LogIn logInURL={logInURL} logIn={logIn}/>} />
        <Route exact path="/create-account" component={() => <AccountForm usersURL={usersURL} logIn={logIn}/>} />
        <Route exact path="/edit-account" component={() => <AccountForm user={user} logIn={logIn} logOut={logOut} usersURL={usersURL} />} />
      </div>
    </Router>
  );
}


export default App;
