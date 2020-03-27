import React, { useContext, useState } from 'react';
import './Select.css';
import { Context } from '../../context';
import logo from './img/logo.svg'
import billy from '../App/img/billy.png'
import ilon from '../App/img/ilon.png'
import kianu from '../App/img/kianu.png'
import selectArrow from './img/select_arrow.svg'

import SelectDone from '../SelectDone'

function Select({ gameData }) {
    const { selectHero } = useContext(Context);

    const [select, setSelect] = useState('')

    const onSelectArrow = (hero) => {

        const arr = gameData.filter(el => el.hero === hero)

        if (arr[0].result) {
            setSelect('')
            selectHero(hero)
        }

        if (select === hero) {
            setSelect('')
        } else {
            setSelect(hero)
        }
    }

    return (
        <div className="Select">
            <span className="select-logo">
                <img src={logo} alt="Выбери персонажа" />
            </span>
            <div className="select-header">
                <span>
                    Три самых меметичных персонажа 2019 года должны совершить сделки на Авито, а ты — помочь им с этим. Выбирай персонажа и тип сделки, а потом веди диалог с продавцами и покупателями.<br />
                    <strong>Твоя задача — помочь что-то продать или купить и научить звезд безопасным сделкам!</strong>
                </span>
            </div>
            <div className={'select-content' + (select ? ' ' + select + '_show' : '')}>
                <div className={'select-item select-item_billy' + (gameData[0].result ? ' done' : '')}>
                    <div className="select-citem_wrap">
                        <div className="select-citem-wrap-img" onClick={() => onSelectArrow('billy')}>
                            <div className="img">
                                <img src={billy} alt="Билли Айлиш" />
                            </div>
                            <div className="title">
                                <span><strong><i>Б</i>и</strong>л<strong>ли</strong> <strong>А<i>й</i>ли</strong>ш</span>
                                <div className="mob-done">Закрыла сделки</div>
                            </div>
                            <img src={selectArrow} alt="Выбор" className="select-arrow" />
                            <svg viewBox="0 0 25 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M15.438 0.5V6.38416C9.97039 6.38432 0 6.44296 0 23.0988C1.1304 11.9608 6.32331 11.8908 15.438 11.8906V18.3165L24.5517 9.40754L15.438 0.5Z" />
                            </svg>
                        </div>
                        <div className="select-citem-wrap-btn">
                            <p>
                                <span>
                                    Самая молодая звезда, когда-либо получавшая главный “Грэмми” (а также лауреат еще кучи музыкальный премий), герой мемов про пчеловода, “возлюбленная” Владимира Зеленского и самая популярная исполнительница в России в 2019 году. Мы любим Билли за искренность и безумный стиль.
                                </span>
                            </p>
                            <button onClick={() => selectHero('billy')}>Выбрать</button>
                        </div>
                    </div>
                    <SelectDone data={gameData[0]} />
                </div>
                <div className={"select-item select-item_ilon" + (gameData[1].result ? ' done' : '')}>
                    <div className="select-citem_wrap">
                        <div className="select-citem-wrap-img" onClick={() => onSelectArrow('ilon')}>
                            <div className="img">
                                <img src={ilon} alt="Илон Маск" />
                            </div>
                            <div className="title">
                                <span><i>И</i>л<strong>он</strong> <i>М</i>а<strong>ск</strong></span>
                                <div className="mob-done">Закрыл сделки</div>
                            </div>
                            <img src={selectArrow} alt="Выбор" className="select-arrow" />
                            <svg viewBox="0 0 25 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M15.438 0.5V6.38416C9.97039 6.38432 0 6.44296 0 23.0988C1.1304 11.9608 6.32331 11.8908 15.438 11.8906V18.3165L24.5517 9.40754L15.438 0.5Z" />
                            </svg>
                        </div>
                        <div className="select-citem-wrap-btn">
                            <p>
                                <span>
                                    Гений, миллиардер, плейбой, филантроп. Нам не нужно сочинять: он сам постоянно подкидывает фанатам поводы для мемов. Чего только стоит его роман с певицей Граймс, поездка в ресторан на собственноручно спроектированном Cybertruck и строительство корабля, способного летать на Луну.
                                </span>
                            </p>
                            <button onClick={() => selectHero('ilon')}>Выбрать</button>
                        </div>
                    </div>
                    <SelectDone data={gameData[1]} />
                </div>
                <div className={"select-item select-item_kianu" + (gameData[2].result ? ' done' : '')}>
                    <div className="select-citem_wrap">
                        <div className="select-citem-wrap-img" onClick={() => onSelectArrow('kianu')}>
                            <div className="img">
                                <img src={kianu} alt="Киану Ривз" />
                            </div>
                            <div className="title">
                                <span><strong><i>К</i></strong>и<strong>ану</strong> <strong>Ри<i>в</i></strong>з</span>
                                <div className="mob-done">Закрыл сделки</div>
                            </div>
                            <img src={selectArrow} alt="Выбор" className="select-arrow" />
                            <svg viewBox="0 0 25 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M15.438 0.5V6.38416C9.97039 6.38432 0 6.44296 0 23.0988C1.1304 11.9608 6.32331 11.8908 15.438 11.8906V18.3165L24.5517 9.40754L15.438 0.5Z" />
                            </svg>
                        </div>
                        <div className="select-citem-wrap-btn">
                            <p>
                                <span>
                                    Главный любимчик соцсетей — Киану Ривз! Не передать словами, как мы ждем четвертую “Матрицу” и “Джона Уика” (а еще Спанч Боба, где он играет говорящую голову) и как счастливы из-за того, что он наконец-то нашел свою любовь. Ну как можно не любить его, когда он такой breathtaking?
                                </span>
                            </p>
                        </div>
                        <button onClick={() => selectHero('kianu')}>Выбрать</button>
                    </div>
                    <SelectDone data={gameData[2]} />
                </div>
            </div>
        </div >
    );
}

export default Select;
