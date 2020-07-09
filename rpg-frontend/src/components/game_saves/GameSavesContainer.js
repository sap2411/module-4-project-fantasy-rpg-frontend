import React from 'react'
import GameSaveCard from './GameSaveCard.js'


const GameSaveContainer = ({game_saves, characters}) => {

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
            </div>
        </div>
    )
}

export default GameSaveContainer