import React from 'react'

const GameSaveCard = ({game_save, character, opponent, loadGameSave, deleteGameSave}) => {

    const handleLoadClick = () => {
        loadGameSave(game_save.id)
    }

    const handleDeleteClick = () => {
        deleteGameSave(game_save.id)
    }
    
    return (
        <div className="card m-4 p text-center">
            <div className="card-header">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <img className="img-thumbnail rounded-circle mt-3" width="100px" height="auto" alt={character.attributes.name} src={character.attributes.image_url}/>
                        <p><small>{character.attributes.name}</small></p>
                    </li>
                    <li className="list-inline-item"><p><b>VS</b></p></li>
                    <li className="list-inline-item">
                        <img className="img-thumbnail rounded-circle mt-3" width="100px" height="auto" alt={opponent.attributes.name} src={opponent.attributes.image_url}/>
                        <p><small>{opponent.attributes.name}</small></p>
                    </li>
                </ul> 
            </div>
            <div className="card-body">
                <h5>Mod: {game_save.current_round}</h5>
                <h5>Player Character: {character.attributes.name}</h5>
                <button className="btn btn-danger m-2" type="button" onClick={handleDeleteClick}>
                    <i className="fas fa-trash-alt"></i>
                    <span className="d-none d-sm-none d-md-inline"> Delete Game</span>
                </button>
                <button className="btn btn-success m-2" type="button" onClick={handleLoadClick}>
                    <i class="fas fa-gamepad"></i>
                    <span className="d-none d-sm-none d-md-inline"> Load Game</span>
                </button>
            </div>
            <div className="card-footer text-muted">
                Last Save: {new Date(game_save.updated_at).toLocaleDateString()}
            </div>
        </div>
    )
}

export default GameSaveCard