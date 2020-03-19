import React, { useState } from 'react';
import { Context } from '../../context';
import './App.css';
import Canvas from '../Canvas';
import Overlay from '../Overlay';
import img_ilon from './img/ilon.svg'
import img_billy from './img/billy.svg'
import img_kianu from './img/kianu.svg'
import ilon_sell from './img/ilon_sell.svg'
import billy_sell from './img/billy_sell.svg'
import kianu_sell from './img/kianu_sell.svg'
import ilon_buy from './img/ilon_buy.svg'
import billy_buy from './img/billy_buy.svg'
import kianu_buy from './img/kianu_buy.svg'
import billy_mess from './img/billy_mess.svg'
import ilon_mess from './img/ilon_mess.svg'
import kianu_mess from './img/kianu_mess.svg'
import billy_sell_big from './img/billy_sell_big.svg'
import ilon_sell_big from './img/ilon_sell_big.svg'
import kianu_sell_big from './img/kianu_sell_big.svg'

function App() {

  const [levels, setLevel] = useState(['start', 'select', 'game', 'final'])
  const [hero, setHero] = useState('ilon')
  const [overlay, setOverlay] = useState(true)
  const [gameData, setGameData] = useState(
    [
      {
        hero: 'billy',
        img: img_billy,
        name: 'Билли Айлиш',
        message: billy_mess,
        data: [
          {
            state: true,
            img: billy_sell,
            img_big: billy_sell_big,
            title: 'Альбом Билли Айлиш «When We All Fall Asleep, Where Do We Go?»',
            subtitle: 'Продаю свой дебютный альбом с автографом. Все подробности — в ЛС :))',
            price: '15 999 ₽',
            city: 'Москва',
          },
          { state: true, img: billy_buy }
        ],

      },
      {
        hero: 'ilon',
        img: img_ilon,
        name: 'Илон Маск',
        message: ilon_mess,
        data: [
          {
            state: true,
            img: ilon_sell,
            img_big: ilon_sell_big,
            title: 'Tesla Model S, моя любимая ласточка',
            subtitle: 'Пробег: 420 км Состояние: как новенькая Цвет: черный',
            price: '10 000 000 ₽',
            city: 'Москва',
          },
          { state: true, img: ilon_buy }
        ],
      },
      {
        hero: 'kianu',
        img: img_kianu,
        name: 'Киану Ривз',
        message: kianu_mess,
        data: [
          {
            state: true,
            img: kianu_sell,
            img_big: kianu_sell_big,
            title: 'iPhone 8 б/у',
            subtitle: 'Продаю свой айфон. Пользовался им около года, но решил купить новый. В хорошем состоянии! Только Москва.',
            price: '15 000 ₽',
            city: 'Москва'
          },
          { state: true, img: kianu_buy }
        ],
      },
    ]
  )

  const level = levels[0];

  const game = gameData.filter(el => el.hero === hero)

  const changeLevel = () => {
    setLevel(levels.filter(el => el !== level))
    setOverlay(true);
  }

  const selectHero = (hero) => {
    setHero(hero)
    changeLevel()
  }

  return (
    <Context.Provider value={{
      changeLevel, selectHero, setOverlay
    }}>
      <div className="App">
        <Canvas level={level} game={game[0]} />
        {overlay ? (<Overlay />) : ('')}
      </div>
    </Context.Provider>
  );
}

export default App;
