import React, { useState } from 'react';
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
    "id": "183",
    "type": "user",
    "attributes": {
      "email": "charlie@pouros.name",
      "name": "Tess Swift",
      "first_name": "Tess",
      "last_name": "Swift",
      "game_saves": [
        {
          "id": 115,
          "user_id": 183,
          "character_id": 135,
          "current_round": 0
        },
        {
          "id": 116,
          "user_id": 183,
          "character_id": 139,
          "current_round": 5
        },
        {
          "id": 119,
          "user_id": 183,
          "character_id": 146,
          "current_round": 1
        }
      ],
      "game_save_character_names": [
        "Joshua Mclean",
        "Matt Milton",
        "John Franti"
      ],
      "game_save_character_image_urls": [
        "https://ca.slack-edge.com/T02MD9XTF-UUJDV171R-88692fb6e05a-512",
        "https://ca.slack-edge.com/T02MD9XTF-USXFDH4HW-bba52931d289-512",
        "https://ca.slack-edge.com/T02MD9XTF-UJU0RHGQP-dd78c31927cc-512"
      ]
    }
  }


  // Fake login state via state hook
  const [user, setUser] = useState(testUser)

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
        <Route exact path="/new-game" component={() => <Game charactersURL={charactersURL} />} />
        <Route exact path="/load-game" component={() => <LoadGames game_saves={user.attributes.game_saves} character_names={user.attributes.game_save_character_names} character_image_urls={user.attributes.game_save_character_image_urls}/>} />
        {/* <Route exact path="/about" component={About} /> */}

        <Route exact path="/log-in" component={() => <LogIn logInURL={logInURL} logIn={logIn}/>} />
        <Route exact path="/create-account" component={() => <AccountForm usersURL={usersURL} logIn={logIn}/>} />
        <Route exact path="/edit-account" component={() => <AccountForm user={user} logIn={logIn} logOut={logOut} usersURL={usersURL} />} />
      </div>
    </Router>
  );
}


export default App;
