import React, { Component } from 'react';
import CharacterSelect from './game_route/CharacterSelectPage.js';
import Fight from './game_route/Fight.js';

class Game extends Component{
    state = {
        collection: [],
        round: 1,
        bosses: [],
        player: null,
        opponent: null
    }

  fetchCharacters = () => {
      fetch(this.props.charactersURL)
      .then(resp => resp.json())
      .then(json => {
        const characters = json.data.map(data => data.attributes)
        this.setState({
          collection: characters.filter(character => character.group === "Playable"),
          bosses: characters.filter(character => character.group === "Boss")
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
        player: char,
        opponent: o
    });
  }


  loseGame = () => {
   //when player health <= 0, redirect to game over
  }

  advanceRound = () => {
    //triggered by opponent health <= 0
    if (this.state.round < 3){
      let o = this.state.collection[Math.floor(Math.random() * this.state.collection.length)];
      let all = this.state.collection.filter(i => i !== o)
      let next = this.state.round + 1
      this.setState({
        round: next,
        collection: [...all],
        opponent: o
      })
        
    }else{
    //redirect to Win
    }
  }
    
  render() {
    return (
    <div>
        {this.state.player ? <Fight loseGame={this.loseGame} advanceRound={this.advanceRound} round={this.state.round} player={this.state.player} opponent={this.state.opponent} /> : <CharacterSelect chooseCharacter={this.chooseCharacter} collection={this.state.collection} />}
    </div>
    );
  }
}


export default Game;