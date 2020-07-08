import React from "react";


const BackCard = props => {
  return (
    <div className="card m-4" style={{width: "20rem"}} key={props.character.id} onClick={() => {props.handleDivClick()}}>
        <i className="icon large circular yellow lightning" />
        <strong>Attack: {props.character.abilities[0].name}</strong>
        <strong>Description: {props.character.abilities[0].description}</strong><br/>

        <i className="icon large circular red heartbeat" />
        <strong>Defence: {props.character.abilities[1].name}</strong>
        <strong>Description: {props.character.abilities[1].description}</strong><br/>
        
        <i className="icon large circular blue star" />
        <strong>Special: {props.character.abilities[2].name}</strong>
        <strong>Description: {props.character.abilities[2].description}</strong>

    </div>
  );
};

export default BackCard;