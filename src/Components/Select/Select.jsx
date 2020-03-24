import React, { useContext, useState } from 'react';
import './Select.css';
import { Context } from '../../context';
import logo from './img/logo.svg'
import billy from '../App/img/billy.svg'
import ilon from '../App/img/ilon.svg'
import kianu from '../App/img/kianu.svg'
import billy_t from './img/billy_t.svg'
import ilon_t from './img/ilon_t.svg'
import kianu_t from './img/kianu_t.svg'
import selectArrow from './img/select_arrow.svg'

import SelectDone from '../SelectDone'

function Select({ gameData }) {
    const { selectHero } = useContext(Context);

    const [select, setSelect] = useState('')

    const onSelectArrow = (hero) => {
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
                        <div className="select-citem-wrap-img">
                            <div className="img">
                                <img src={billy} alt="Билли Айлиш" />
                            </div>
                            <div className="title">
                                <img src={billy_t} alt="Билли Айлиш" />
                            </div>
                            <img src={selectArrow} alt="Выбор" className="select-arrow" onClick={() => onSelectArrow('billy')} />
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
                        <div className="select-citem-wrap-img">
                            <div className="img">
                                <img src={ilon} alt="Илон Маск" />
                            </div>
                            <div className="title">
                                <img src={ilon_t} alt="Илон Маск" />
                            </div>
                            <img src={selectArrow} alt="Выбор" className="select-arrow" onClick={() => onSelectArrow('ilon')} />
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
                        <div className="select-citem-wrap-img">
                            <div className="img">
                                <img src={kianu} alt="Киану Ривз" />
                            </div>
                            <div className="title">
                                <img src={kianu_t} alt="Киану Ривз" />
                            </div>
                            <img src={selectArrow} alt="Выбор" className="select-arrow" onClick={() => onSelectArrow('kianu')} />
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
