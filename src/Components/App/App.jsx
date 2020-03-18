import React, { useState } from 'react';
import { Context } from '../../context';
import './App.css';
import Canvas from '../Canvas';
import img_ilon from './img/ilon.svg'
import img_billy from './img/billy.svg'
import img_kianu from './img/kianu.svg'

function App() {

  const [levels, setLevel] = useState(['start', 'select', 'game', 'final'])
  const [hero, setHero] = useState('ilon')
  const [gameData, setGameData] = useState(
    [
      { hero: 'billy', img: img_billy, name: 'Билли Айлиш' },
      { hero: 'ilon', img: img_ilon, name: 'Илон Маск' },
      { hero: 'kianu', img: img_kianu, name: 'Киану Ривз' },
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
