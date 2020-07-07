import React from "react";

const CharacterCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.character.id}
        onClick={() => {props.handleDivClick(props.character)}}
      >
        <div className="image">
          <img alt="oh no!" src={props.character.image_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.character.name}
          </div>
          <div className="meta text-wrap">
            <small>{props.character.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.character.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.character.abilities[0]}
          </span>
          <span>
            <i className="icon shield" />
            {props.character.abilities[1]}
          </span>
          <span>
            <div className="ui center aligned segment basic">
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
