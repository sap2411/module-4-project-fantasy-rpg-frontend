import React from 'react'

const GameSaveCard = ({game_save, character_name, character_image_url}) => {

    const handleClick = gameSaveID => {
        console.log(gameSaveID)
    }
    
    return (
        <div className="card m-4 p " >
            <img className="card-img-top" alt={character_name} src={character_image_url} />
            <div className="card-body">
                <h4 className="card-title">Character: {character_name}</h4>
                <p>Current Round: {game_save.current_round}</p>
                <button className="btn btn-success btn-block" type="button" value={game_save.id} onClick={(event) => handleClick(event.target.value)}>Load Game</button>
            </div>
        </div>
    )
}

export default GameSaveCard