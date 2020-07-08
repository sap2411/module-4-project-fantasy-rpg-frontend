import React, { Component } from 'react';
import CharacterSelect from './game_route/CharacterSelectPage.js';
import Fight from './game_route/Fight.js';
const URL = 'http://localhost:3001/characters'


class Game extends Component{
    state = {
        collection: [],
        character: null,
        opponent: null,
        round: 1
    }

    fetchCharacters = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(characters => {
          let a = []
          characters.data.forEach(data => a.unshift(data.attributes))
          this.setState(prevState => {
            return {collection: [...prevState.collection, ...a]}
          })
        })
    }

    componentDidMount = () => {
        this.fetchCharacters()
    }

  chooseCharacter = (char) => {
    let all = this.state.collection.filter(i => i !== char)
    let o = all[Math.floor(Math.random() * all.length)];
    all = this.state.collection.filter(i => i !== o)
    this.setState({
        collection: [...all],
        character: char,
        opponent: o
    });
    console.log(this.state)
  }

  loseGame = () => {
   //when player health <= 0, redirect to game over
  }

  advanceRound = () => {
    //triggered by opponent health <= 0
    if (this.state.round < 3){
        let next = this.state.round + 1
        this.setState({round: next})
    }else{
    //redirect to Win
    }
  }
    
  render() {
    return (
    <div>
        {this.state.character ? <Fight loseGame={this.loseGame} advanceRound={this.advanceRound} round={this.state.round} player={this.state.character} opponent={this.state.opponent} /> : <CharacterSelect chooseCharacter={this.chooseCharacter} collection={this.state.collection} />}
    </div>
    );
  }
}


export default Game;