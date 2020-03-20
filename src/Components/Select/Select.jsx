import React, { useContext } from 'react';
import './Select.css';
import { Context } from '../../context';
import logo from './img/logo.svg'
import billy from '../App/img/billy.svg'
import ilon from '../App/img/ilon.svg'
import kianu from '../App/img/kianu.svg'
import billy_t from './img/billy_t.svg'
import ilon_t from './img/ilon_t.svg'
import kianu_t from './img/kianu_t.svg'

function Select() {
    const { selectHero } = useContext(Context);

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
            <div className="select-content">
                <div className="select-item select-item_billy">
                    <div className="select-citem_wrap">
                        <div className="img">
                            <img src={billy} alt="Билли Айлиш" />
                        </div>
                        <div className="title">
                            <img src={billy_t} alt="Билли Айлиш" />
                        </div>
                        <p>
                            Самая молодая звезда, когда-либо получавшая главный “Грэмми” (а также лауреат еще кучи музыкальный премий), герой мемов про пчеловода, “возлюбленная” Владимира Зеленского и самая популярная исполнительница в России в 2019 году. Мы любим Билли за искренность и безумный стиль.
                        </p>
                    </div>
                    <button onClick={() => selectHero('billy')}>Выбрать</button>
                </div>
                <div className="select-item select-item_ilon">
                    <div className="select-citem_wrap">
                        <div className="img">
                            <img src={ilon} alt="Илон Маск" />
                        </div>
                        <div className="title">
                            <img src={ilon_t} alt="Илон Маск" />
                        </div>
                        <p>
                            Гений, миллиардер, плейбой, филантроп. Нам не нужно сочинять: он сам постоянно подкидывает фанатам поводы для мемов. Чего только стоит его роман с певицей Граймс, поездка в ресторан на собственноручно спроектированном Cybertruck и строительство корабля, способного летать на Луну.
                        </p>
                    </div>
                    <button onClick={() => selectHero('ilon')}>Выбрать</button>
                </div>
                <div className="select-item select-item_kianu">
                    <div className="select-citem_wrap">
                        <div className="img">
                            <img src={kianu} alt="Киану Ривз" />
                        </div>
                        <div className="title">
                            <img src={kianu_t} alt="Киану Ривз" />
                        </div>
                        <p>
                            Главный любимчик соцсетей — Киану Ривз! Не передать словами, как мы ждем четвертую “Матрицу” и “Джона Уика” (а еще Спанч Боба, где он играет говорящую голову) и как счастливы из-за того, что он наконец-то нашел свою любовь. Ну как можно не любить его, когда он такой breathtaking?
                        </p>
                    </div>
                    <button onClick={() => selectHero('kianu')}>Выбрать</button>
                </div>
            </div>
        </div>
    );
}

export default Select;
