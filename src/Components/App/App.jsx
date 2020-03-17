import React, { useState } from 'react';
import { Context } from '../../context';
import './App.css';
import Canvas from '../Canvas';

function App() {

  const [levels, setLevel] = useState(['start', 'select', 'game', 'final'])

  const level = levels[0];

  const changeLevel = () => {
    setLevel(levels.filter(el => el !== level))
  }

  return (
    <Context.Provider value={{
      changeLevel
    }}>
      <div className="App">
        <Canvas level={level} />
      </div>
    </Context.Provider>
  );
}

export default App;
