import React from 'react'
import GameSaveCard from './GameSaveCard.js'
import {Link} from 'react-router-dom';


const GameSaveContainer = ({game_saves, characters}) => {

    const deleteGameSave = () => {

    }

    const gameSaveCards = () => {
        return game_saves.map(game_save => {
            return ( <GameSaveCard
                key={game_save.id}
                game_save={game_save}
                character={characters.find(character => parseInt(character.id) === game_save.character_id)}
                opponent={characters.find(character => parseInt(character.id) === game_save.opponent_id)}
                />
            )
        })
    }

    return (
        <div className="container my-5 mx-auto">
            <div className="row row-col-3 justify-content-center">
                
                {gameSaveCards()}

                <Link exact to="/new-game" title="New Game">
                    <button className="btn btn-light btn-lg m-2" type="button">
                        <i class="fas fa-gamepad"></i>
                        <span className="d-none d-sm-none d-md-inline"> New Game</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default GameSaveContainer