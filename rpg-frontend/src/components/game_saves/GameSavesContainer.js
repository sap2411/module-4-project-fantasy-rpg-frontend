import React from 'react'
import GameSaveCard from './GameSaveCard.js'
import {Link} from 'react-router-dom';


const GameSaveContainer = ({game_saves, characters, gameSavesURL}) => {

    const loadGameSave = (gameSaveID) => {
        // redirect to appropiate route
    }

    const deleteGameSave = (gameSaveID) => {
        // console.log()
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }
        fetch(gameSavesURL + '/' + gameSaveID, options)
        // Should update the logged in user somehow........
        // Also should do some error checking
    }
    

    const gameSaveCards = () => {
        return game_saves.map(game_save => {
            return ( <GameSaveCard
                key={game_save.id}
                game_save={game_save}
                character={characters.find(character => parseInt(character.id) === game_save.character_id)}
                opponent={characters.find(character => parseInt(character.id) === game_save.opponent_id)}
                loadGameSave={loadGameSave}
                deleteGameSave={deleteGameSave}
                />
            )
        })
    }

    return (
        <div className="container my-5 mx-auto text-center">
            <Link exact to="/new-game" title="New Game">
                <button className="btn btn-light btn-lg m-2" type="button">
                    <i class="fas fa-gamepad"></i>
                    <span className="d-none d-sm-none d-md-inline"> New Game</span>
                </button>
            </Link>
            <div className="row row-col-3 justify-content-center">
                {gameSaveCards()}
            </div>
        </div>
    )
}

export default GameSaveContainer