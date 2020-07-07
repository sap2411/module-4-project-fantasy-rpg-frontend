import React, { Component } from "react";
import CharacterCollection from './CharacterCollection.js';
import CharacterSpecs from './CharacterSpecs.js';

const URL = 'http://localhost:3001/characters'

class CharacterSelect extends Component {
  state = {
    collection: [{id:1, name: "Steven", catchphrase: "hi", image_url: '../../../public/boss.png', health: 100, abilities: ["ability 1", "ability 2"]}],
    characterSpecs: false,
    character: false
  }

  fetchCharacters = () => {
    // fetch(URL)
    // .then(resp => resp.json())
    // .then(characters => {
    //   this.setState({
    //     collection: [...characters]
    //   })
    // })
    this.setState({collection: [{id:1, name: "Steven", catchphrase: "hi", image_url: '../../../public/boss.png', health: 100, abilities: ["ability 1", "ability 2"]}]})
  }

  updateCharacterForSpecs = (character=false) => {
    this.setState({characterSpecs: character});
  }

  toggleView = () => {
    return !!this.state.characterSpecs ? this.renderSpecs() : this.renderCollection()
  }

  chooseCharacter = (char) => {
    this.setState({character: char});
  }

  renderCollection = () => <CharacterCollection showSpecs={this.updateCharacterForSpecs} toggleView={this.updateCharacterForSpecs} collection={this.state.collection} />

  renderSpecs = () => <CharacterSpecs character={this.state.characterSpecs} toggleView={this.updateCharacterForSpecs} showSpecs={this.updateCharacterForSpecs} choose={this.chooseCharacter} />

  componentDidMount = () => {
    this.fetchCharacters()
  }

  render() {
    return (
    <div>
      {this.toggleView()}
    </div>
    );
  }
}

export default CharacterSelect;
