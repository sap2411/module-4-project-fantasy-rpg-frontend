import React from "react";
import Colton from '../../assets/boss.png'


const CharacterSpecs = props => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.character.image_url? props.character.image_url : Colton}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {props.character.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.character.catchphrase}
            </p>
            {/* <strong>
              "Special Ability"
            </strong> */}
            <br />
          </div>
        </div>
      </div>
            <div className="ui segment">
              <div className="ui one column centered grid">
                
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                  </div>
                  <div className="column">
                    <strong>Attack: {props.character.abilities[0].name}</strong>
                  </div>
                  <div className="column">
                    <strong>Description: {props.character.abilities[0].description}</strong>
                  </div><br/>
                
                
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                  </div>
                  <div className="column">
                    <strong>Defence: {props.character.abilities[1].name}</strong>
                  </div>
                  <div className="column">
                    <strong>Description: {props.character.abilities[1].description}</strong>
                  </div><br/>
              
                
                  <div className="column">
                    <i className="icon large circular blue star" />
                  </div>
                  <div className="column">
                    <strong>Special: {props.character.abilities[2].name}</strong>
                  </div>
                  <div className="column">
                    <strong>Description: {props.character.abilities[2].description}</strong>
                  </div>
                
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() => {props.toggleView()}}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() => {props.choose(props.character)}}
            >
              Play Character
            </button>
          </div>
  );
};

export default CharacterSpecs;
