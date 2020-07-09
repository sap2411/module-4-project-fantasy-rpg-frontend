import React, { Component } from 'react';
import CharacterSelect from './game_route/CharacterSelectPage.js';
import Fight from './game_route/Fight.js';
import Victory from './game_route/Victory.js';

class Game extends Component{
    state = {
        collection: [],
        round: 4,
        bosses: [],
        player: null,
        opponent: null,
        beatGame: false
    }

  componentDidMount = () => {
      const characters = this.props.characters.map(data => data.attributes)
        this.setState({
          collection: characters.filter(character => character.group === "Playable"),
          bosses: characters.filter(character => character.group === "Boss")
        })
  }

  chooseCharacter = (char) => {
    let all = this.state.collection.filter(i => i !== char)
    let o = all[Math.floor(Math.random() * all.length)];
    all = this.state.collection.filter(i => i !== o)
    this.setState({
        collection: [...all],
        player: char,
        opponent: o
    });
  }


  loseGame = () => {
   //when player health <= 0, redirect to game over
  }

  advanceRound = () => {
    //triggered by opponent health <= 0
    if (this.state.round < 4){
      let o = this.state.collection[Math.floor(Math.random() * this.state.collection.length)];
      let all = this.state.collection.filter(i => i !== o)
      let next = this.state.round + 1
      this.setState({
        round: next,
        collection: [...all],
        opponent: o
      })
        
    }else if (this.state.round == 4){
      let final = '5 - INSTRUCTOR FIGHT'
      this.setState({
        round: final,
        opponent: this.state.bosses[Math.floor(Math.random() * this.state.bosses.length)]
      })
    }else{
      this.setState({
        beatGame: true
      })
    }
  }

  startGame = () => {
    return this.state.player ? <Fight loseGame={this.loseGame} advanceRound={this.advanceRound} round={this.state.round} player={this.state.player} opponent={this.state.opponent} /> : <CharacterSelect chooseCharacter={this.chooseCharacter} collection={this.state.collection} />
  }
    
  render() {
    return (
    <div>
      {this.state.beatGame ? <Victory /> : this.startGame()}
    </div>
    );
  }
}


export default Game;