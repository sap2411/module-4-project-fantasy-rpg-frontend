import React from "react";

const CharacterCard = props => {
  return (
    <div className="card m-4" style={{width: "20rem"}} key={props.character.id} onClick={() => {props.handleDivClick(props.character)}}>
      <img className="card-img-top" alt={props.character.name} src={props.character.image_url} />
      <div className="card-body">
        <h3 className="card-title">{props.character.name}</h3>
        <p className="card-title">{props.character.catchphrase}</p>
        <p><i className="icon large circular red heart" /> {props.healthLeft}/{props.character.health}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
