import React, { Component } from 'react';
import CharacterSelect from './game_route/CharacterSelectPage.js';
import Fight from './game_route/Fight.js';
const URL = 'http://localhost:3001/characters'


class Game extends Component{
    state = {
        collection: [],
        bosses: [],
        player: null,
        opponent: null
    }

    fetchCharacters = () => {
        fetch(URL)
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
    
  render() {
    return (
    <div>
        {this.state.player ? <Fight player={this.state.player} opponent={this.state.opponent} /> : <CharacterSelect chooseCharacter={this.chooseCharacter} collection={this.state.collection} />}
    </div>
    );
  }
}


export default Game;