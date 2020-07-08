import React, { Component } from 'react';
import CharacterSelect from './game_route/CharacterSelectPage.js';
import Fight from './game_route/Fight.js';
const URL = 'http://localhost:3001/characters'


class Game extends Component{
    state = {
        collection: [],
        character: null,
        opponent: null
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
    let all = this.state.collection.filter(i => i != char)
    let o = all[Math.floor(Math.random() * all.length)];
    all = this.state.collection.filter(i => i != o)
    this.setState({
        collection: [...all],
        character: char,
        opponent: o
    });
  }
    
  render() {
    return (
    <div>
        {this.state.character ? <Fight player={this.state.character} opponent={this.state.opponent} /> : <CharacterSelect chooseCharacter={this.chooseCharacter} collection={this.state.collection} />}
    </div>
    );
  }
}


export default Game;