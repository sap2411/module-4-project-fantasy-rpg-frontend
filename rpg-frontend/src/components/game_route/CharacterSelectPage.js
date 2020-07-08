import React, { Component } from "react";
import CharacterCollection from './CharacterCollection.js';
import CharacterSpecs from './CharacterSpecs.js';


class CharacterSelect extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      characterSpecs: false
    }
  }

  updateCharacterForSpecs = (character=false) => {
    this.setState({characterSpecs: character});
  }

  toggleView = () => {
    return !!this.state.characterSpecs ? this.renderSpecs() : this.renderCollection()
  }

  renderCollection = () => <CharacterCollection showSpecs={this.updateCharacterForSpecs} toggleView={this.updateCharacterForSpecs} collection={this.props.collection} />

  renderSpecs = () => <CharacterSpecs character={this.state.characterSpecs} toggleView={this.updateCharacterForSpecs} choose={this.props.chooseCharacter} />

  render() {
    return (
    <div>
      <h1>Choose Your Character</h1>
      {this.toggleView()}
    </div>
    );
  }
}

export default CharacterSelect;
