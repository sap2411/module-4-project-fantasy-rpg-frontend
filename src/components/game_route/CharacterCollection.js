import React, { Component } from "react";
import CharacterCard from './CharacterCard.js';

class CharacterCollection extends Component {
  renderCollection = () => {
    const {collection, showSpecs} = this.props;
  if (collection) return collection.map(character => {return <CharacterCard  character={character} healthLeft={character.health} handleDivClick={showSpecs}/>})
  }

  render() {
    return (
      <div className="ui four column centered grid">
        <div className="row">
          {this.renderCollection()}
        </div>
      </div>
    );
  }
}

export default CharacterCollection;
