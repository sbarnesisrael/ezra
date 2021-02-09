import React from 'react';
import Card from './card.component';

function Game(props) {
    return (
        <div className="game">
            <div className="game-board">
                <Card />
            </div>
        </div>
    )
}

export default Game;