import React from 'react';
import './Game.css';
import stars from './img/stars.svg'

function Game({ game }) {

    const { name, img, hero, data } = game;
    const sell = data[0].img
    const buy = data[1].img
    const cls = ['Game', hero]
    console.log(data)
    return (
        <div className={cls.join(' ')}>
            <div className="game-column-1">
                <div className="game-profile">
                    <div className="title">Это ваш профиль,</div>
                    <div className="name">{name}</div>
                    <div className="img">
                        <img src={img} alt={name} />
                    </div>
                    <div className="game-stars">
                        <span>Рейтинг</span>
                        <span className="stars">
                            <img src={stars} alt="Рейтинг" />
                        </span>
                    </div>
                </div>
                <div className="game-sell">
                    <div className="game-sell-wrap">
                        <img src={sell} alt="Хочу продать" />
                    </div>
                </div>
                <div className="game-sell">
                    <div className="game-sell-wrap">
                        <img src={buy} alt="Хочу купить" />
                    </div>
                </div>
            </div>
            <div className="game-column-2"></div>
        </div>
    );
}

export default Game;
