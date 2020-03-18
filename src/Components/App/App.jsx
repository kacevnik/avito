import React, { useState } from 'react';
import { Context } from '../../context';
import './App.css';
import Canvas from '../Canvas';
import img_ilon from './img/ilon.svg'
import img_billy from './img/billy.svg'
import img_kianu from './img/kianu.svg'
import ilon_sell from './img/ilon_sell.svg'
import billy_sell from './img/billy_sell.svg'
import kianu_sell from './img/kianu_sell.svg'
import ilon_buy from './img/ilon_buy.svg'
import billy_buy from './img/billy_buy.svg'
import kianu_buy from './img/kianu_buy.svg'

function App() {

  const [levels, setLevel] = useState(['start', 'select', 'game', 'final'])
  const [hero, setHero] = useState('ilon')
  const [gameData, setGameData] = useState(
    [
      {
        hero: 'billy',
        img: img_billy,
        name: 'Билли Айлиш',
        data: [
          { state: true, img: billy_sell },
          { state: true, img: billy_buy }
        ],
      },
      {
        hero: 'ilon',
        img: img_ilon,
        name: 'Илон Маск',
        data: [
          { state: true, img: ilon_sell },
          { state: true, img: ilon_buy }
        ],
      },
      {
        hero: 'kianu',
        img: img_kianu,
        name: 'Киану Ривз',
        data: [
          { state: true, img: kianu_sell },
          { state: true, img: kianu_buy }
        ],
      },
    ]
  )

  const level = levels[0];

  const game = gameData.filter(el => el.hero === hero)

  const changeLevel = () => {
    setLevel(levels.filter(el => el !== level))
  }

  const selectHero = (hero) => {
    setHero(hero)
    changeLevel()
  }

  return (
    <Context.Provider value={{
      changeLevel, selectHero
    }}>
      <div className="App">
        <Canvas level={level} game={game[0]} />
      </div>
    </Context.Provider>
  );
}

export default App;
