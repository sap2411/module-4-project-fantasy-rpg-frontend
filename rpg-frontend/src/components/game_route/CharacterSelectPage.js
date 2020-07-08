import React, { Component } from "react";
import CharacterCollection from './CharacterCollection.js';
import CharacterSpecs from './CharacterSpecs.js';

const URL = 'http://localhost:3001/characters'

class CharacterSelect extends Component {
  state = {
    collection: [],
    characterSpecs: false,
    character: false
  }

  fetchCharacters = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(characters => {
      let a = []
      characters.data.forEach(data => a.unshift(data.attributes))
      console.log(a)
      this.setState(prevState => {
        return {collection: [...prevState.collection, ...a]}
      })
      console.log(this.state)
    })
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
      <div className="row justify-content-md-center m-4">
        <div className="col text-center">
          <h1>Choose Your Character</h1>
          {this.toggleView()}
        </div>
      </div>
    );
  }
}

export default CharacterSelect;
