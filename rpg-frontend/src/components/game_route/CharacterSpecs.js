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
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.character.health}</strong>
                  </div><br/>
                  </div><div className="row">
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.character.abilities[0].name}</strong>
                  </div><br/></div><div className="row">
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>Special Ability</strong>
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default CharacterSpecs;
