import React from 'react';
import './Game.css';
import profile_img from '../App/img/ilon.svg'


function Game() {

    return (
        <div className="Game">
            <div className="game-column-1">
                <div className="game-profile">
                    <div className="title">Это ваш профиль,</div>
                    <div className="name">Илон Маск</div>
                    <div className="img">
                        <img src={profile_img} alt="Илон Маск" />
                    </div>
                </div>
            </div>
            <div className="game-column-2"></div>
        </div>
    );
}

export default Game;
