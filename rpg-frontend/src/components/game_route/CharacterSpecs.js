import React from "react";

const CharacterSpecs = props => {

  const characterAbilities = () => {
    return props.character.abilities.map(ability => {
    return (
            <div className="col" key={ability.id}>
                <ul className="list-unstyled">
                    <li><h3>{ability.group}: {ability.name}</h3></li>
                    <li><h4>Damage Effect: {ability.damage_effect} <i className="fas fa-fist-raised text-warning"/></h4></li>
                    <li><h4>Healing Effect: {ability.healing_effect} <i className="fas fa-heart text-danger"/></h4></li>
                    <li><h4>Cooldown: {ability.cooldown} <i className="fas fa-sync-alt text-success"/></h4></li>
                </ul>
            </div>
        )
      })
    }

  return (
    <div className="jumbotron container rounded-lg col-6 p-5 bg-white mx-auto">
      <div className="row">
        <div className="col-6">
          <img className="img-thumbnail rounded-circle mt-3" width="250px" height="auto" alt={props.character.name} src={props.character.image_url}/>
        </div>
        <div className="col-6">
          <h1 className="display-4 mt-5">{props.character.name}</h1>
          <p className="lead">{props.character.catchphrase}</p>
          <h1 className="display-6" ><i className="display-6 icon large circular red heart" /> {props.character.health}</h1>
        </div>
      </div>
      <div className="row my-5">
        {characterAbilities()}
      </div>
      <button className="btn btn-secondary btn-lg mx-4" type="button" onClick={() => {props.toggleView()}}>
          <i className="fas fa-step-backward"></i>
          <span className="d-none d-sm-none d-md-inline"> Go Back</span>
      </button>
      <button className="btn btn-success btn-lg mx-4" type="button" onClick={() => {props.choose(props.character)}}>
          <i className="fas fa-gamepad"></i>
          <span className="d-none d-sm-none d-md-inline"> Start Game</span>
      </button>
    </div>
  );
};

export default CharacterSpecs;
