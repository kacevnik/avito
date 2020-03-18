import React from 'react';
import './Game.css';

function Game({ game }) {

    const { name, img, hero } = game;

    const cls = ['Game', hero]

    return (
        <div className={cls.join(' ')}>
            <div className="game-column-1">
                <div className="game-profile">
                    <div className="title">Это ваш профиль,</div>
                    <div className="name">{name}</div>
                    <div className="img">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </div>
            <div className="game-column-2"></div>
        </div>
    );
}

export default Game;
