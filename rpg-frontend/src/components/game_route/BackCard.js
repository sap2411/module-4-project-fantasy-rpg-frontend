import React from "react";


const BackCard = props => {
  const characterAbilities = () => {
    return props.character.abilities.map(ability => {
    return (
            <div className="card m-3" key={ability.id}>
                <ul className="list-unstyled">
                    <li><h4>{ability.group}: {ability.name}</h4></li>
                    <li>Damage Effect: {ability.damage_effect} <i className="fas fa-fist-raised text-warning"/></li>
                    <li>Healing Effect: {ability.healing_effect} <i className="fas fa-heart text-danger"/></li>
                    <li>Cooldown: {ability.cooldown} <i className="fas fa-sync-alt text-success"/></li>
                </ul>
            </div>
        )
      })
    }
  return (
    <div className="card m-4" style={{width: "20rem"}} key={props.character.id} onClick={() => {props.handleDivClick()}}>
        {characterAbilities()}
    </div>
  );
};

export default BackCard;