import React from "react";
import Colton from '../../assets/boss.png'


const CharacterCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.character.id}
        onClick={() => {props.handleDivClick(props.character)}}
      >
        <div className="image">
          <img alt="oh no!" src={props.character.image_url? props.character.image_url : Colton} />
        </div>
        <div className="content">
          <div className="header">
            {props.character.name}
          </div>
          <div className="meta text-wrap">
            <small>{props.character.catchphrase}</small>
          </div>
        </div>
        {/* <div className="extra content"> */}
          {/* <span>
            <i className="icon heartbeat" />
            {props.character.health}
          </span><br></br>

          <span>
            <i className="icon lightning" />
            {props.character.abilities[0].name}
          </span> */}
          {/* <span>
            <i className="icon shield" />
            {props.character.abilities[1].name}
          </span> */}
          <span>
            <div className="ui center aligned segment basic">
            </div>
          </span>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CharacterCard;
