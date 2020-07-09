import React from 'react'
import GameSaveCard from './GameSaveCard.js'


const GameSaveContainer = ({game_saves, character_names, character_image_urls}) => {

    const gameSaveCards = () => {
        return game_saves.map((game_save,index) => {
            return ( <GameSaveCard
                key={game_save.id}
                game_save={game_save}
                character_name={character_names[index]}
                character_image_url={character_image_urls[index]}
                />
            )
        })
    }

    return (
        <div className="container my-5 mx-auto p-2">
            <div className="row row-cols-4 d-flex justify-content-center">
                {gameSaveCards()}
            </div>
        </div>
    )
}

export default GameSaveContainer