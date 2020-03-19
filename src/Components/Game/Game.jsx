import React from 'react';
import './Game.css';
import stars from './img/stars.svg'
import my from './img/my.svg'
import hart from './img/hart.svg'
import messages from './img/message.svg'
import arrow from './img/arrow.svg'

function Game({ game }) {

    const { name, img, hero, data, message } = game;
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
                    <img src={message} alt="Привет!!" className="hello-message" />
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
            <div className="game-column-2">
                <div className="game-navbar">
                    <div className="game-nav-m">
                        <img src={my} alt="Мои объявления" />
                        <span>Мои объявления</span>
                    </div>
                    <div className="game-nav-m">
                        <img src={hart} alt="Избранное" />
                        <span>Избранное</span>
                    </div>
                    <div className="game-nav-m message">
                        <img src={messages} alt="Сообщения" />
                        <span>Сообщения</span>
                    </div>
                    <div className="game-nav-m nav-hero">
                        <span>{name}</span>
                        <img src={img} alt={name} className="avatar" />
                        <img src={arrow} alt="Стрелка" className="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;
