import React from 'react';
import '../App.css';
import CharacterSelect from './game_route/CharacterSelectPage.js';


function Game() {
    
  return (
    <div >
      <header ><br></br>
        <h1>Flatiron Fighter</h1>
        <CharacterSelect />
      </header>
    </div>
  );
}


export default Game;