import React, { useState } from 'react';
import './Game.css';
import stars from './img/stars.svg'
import my from './img/my.svg'
import hart from './img/hart.svg'
import messages from './img/message.svg'
import arrow from './img/arrow.svg'
import empty from './img/empty.svg'
import sell_btn from './img/sell_btn.png'

function Game({ game }) {

    const [show, setShow] = useState('mess_empty');
    const { name, img, hero, data, message } = game;
    const sell = data[0].img
    const buy = data[1].img
    const cls = ['Game', hero, show]

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
                    <div className={'game-nav-m' + (show === 'sell' ? ' active' : '')} onClick={() => setShow('sell')}>
                        <img src={my} alt="Мои объявления" />
                        <span>Мои объявления</span>
                    </div>
                    <div className="game-nav-m">
                        <img src={hart} alt="Избранное" />
                        <span>Избранное</span>
                    </div>
                    <div className={'game-nav-m' + (show === 'mess_empty' ? ' active' : '')} onClick={() => setShow('mess_empty')}>
                        <img src={messages} alt="Сообщения" />
                        <span>Сообщения</span>
                    </div>
                    <div className="game-nav-m nav-hero">
                        <span>{name}</span>
                        <img src={img} alt={name} className="avatar" />
                        <img src={arrow} alt="Стрелка" className="arrow" />
                    </div>
                </div>
                <div className="empty-result">
                    <img src={empty} alt="Начни играть" />
                    <div className="title">
                        {name.split(' ')[0]}, у вас нет новых сообщений :(
                    </div>
                    <div className="mess">
                        Продайте или купите что-нибудь<br />
                        и диалоги не заставят себя долго ждать!
                    </div>
                </div>
                <div className="my-sell">
                    <img src={data[0].img_big} alt={data[0].title} className="my-sell-img" />
                    <div className="my-sell-desc">
                        <div className="text">
                            <div className="title">{data[0].title}</div>
                            <div className="sub-title">{data[0].subtitle}</div>
                            <div className="price">{data[0].price}</div>
                            <div className="city">{data[0].city}</div>
                        </div>
                        <div className="my-sell-desc-but">
                            <button>
                                <img src={sell_btn} alt="Продать" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;
