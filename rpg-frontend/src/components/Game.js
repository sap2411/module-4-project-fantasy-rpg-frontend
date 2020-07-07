import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import CharacterSelect from './game_route/CharacterSelectPage.js';


function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flatiron Fighter</h1>
        <CharacterSelect />
      </header>
    </div>
  );
}


export default Game;