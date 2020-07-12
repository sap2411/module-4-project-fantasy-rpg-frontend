import React from 'react';

const AbilityButtons = (props) => {

    const handleClick = (event) => {
       props.playerAttack(event.currentTarget.value)
    }

    const mapButtons = () => {
        return props.abilities.map(ability => {
        return (
                <button type="button" className="btn btn-primary m-2 p" key={ability.id} value={ability.id} disabled={props.aggressor !== "player" || ability === props.disable} onClick={event => handleClick(event)}>
                    <ul className="list-inline">
                        <li>{ability.name}</li>
                        <li className="list-inline-item"><i className="fas fa-fist-raised text-warning"></i> {ability.damage_effect} </li>
                        <li className="list-inline-item"><i className="fas fa-heart text-danger"></i> {ability.healing_effect} </li>
                        <li className="list-inline-item"><i className="fas fa-sync-alt text-success"></i> {ability.cooldown} </li>
                        <li>{ability.group}</li>
                    </ul>
                </button>
            )})
    }

    return (
        <div>
            {mapButtons()}
        </div>

    )
}

export default AbilityButtons