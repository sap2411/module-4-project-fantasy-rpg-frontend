import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Game from './components/Game.js';
// import About from './components/About.js';
import CreateAccount from './components/CreateAccount.js';
import LogIn from './components/LogIn.js'
// import CharacterSelect from './components/game_route/CharacterSelectPage.js';



function App() {
  // Backend URL
  const backendURL = 'http://localhost:3001'
  const usersURL = backendURL + '/users'
  const charactersURL = backendURL + '/characters'
  const abilitiesURL = backendURL + '/abilities'
  const gameSavesURL = backendURL + '/game_saves'
  const modifiersURL = backendURL + '/modifiers'


  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/new-game" component={Game}/>
        {/* <Route exact path="/load-game" component={load game ...} /> */}
        {/* <Route exact path="/about" component={About} /> */}

        <Route exact path="/create-account" component={() => <CreateAccount usersURL={usersURL}/>} />
        <Route exact path="/Log-in" component={LogIn} />
      </div>
    </Router>
  );
}


export default App;
