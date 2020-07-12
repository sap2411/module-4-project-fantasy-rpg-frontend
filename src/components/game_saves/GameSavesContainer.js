import React from 'react'
import GameSaveCard from './GameSaveCard.js'
import {Link} from 'react-router-dom';


const GameSaveContainer = ({loadGame, game_saves, characters, gameSavesURL, refreshUser}) => {

    const deleteGameSave = (gameSaveID) => {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }
        fetch(gameSavesURL + '/' + gameSaveID, options).then(resp => resp.json()).then(json => {
            // Verify delete succesful before refreshing user.
            if (json.deleted) {
                refreshUser()
            }
        })
    }

    const gameSaveCards = () => {
        return game_saves.map(game_save => {
            return ( <GameSaveCard
                key={game_save.id}
                game_save={game_save}
                character={characters.find(character => parseInt(character.id) === game_save.character_id)}
                opponent={characters.find(character => parseInt(character.id) === game_save.opponent_id)}
                loadGameSave={loadGame}
                deleteGameSave={deleteGameSave}
                />
            )
        })
    }


    return (
        <div className="container my-5 mx-auto text-center" >
            <Link exact to="/new-game" title="New Game">
                <button className="btn btn-light btn-lg m-2" type="button" onClick={() => loadGame(null)}>
                    <i className="fas fa-gamepad"></i>
                    <span className="d-none d-sm-none d-md-inline"> New Game</span>
                </button>
            </Link>
            <button className="btn btn-light btn-lg m-2" type="button" onClick={refreshUser}>
                    <i class="fas fa-sync-alt"></i>
                    <span className="d-none d-sm-none d-md-inline"> Refresh</span>
            </button>
            <div className="row row-col-3 justify-content-center">
                {gameSaveCards()}
            </div>
        </div>
    )
}

export default GameSaveContainer