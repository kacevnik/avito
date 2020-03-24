import React, { useState, useEffect } from 'react';
import './Canvas.css';
import Start from '../Start';
import Select from '../Select';
import Game from '../Game';

function Canvas({ level, game, gameData, overlayBlur }) {

    const [bp, setBp] = useState('center -70px, left bottom, center bottom, right bottom')
    let cls = ['Canvas', level];

    useEffect(() => {
        if (level === 'select' && bp !== 'left top, right top, left bottom, right bottom') {
            setBp('left top, right top, left bottom, right bottom');
        }

        if (level === 'game' && bp !== 'center bottom') {
            setBp('center bottom');
        }
    }, [bp, level])

    const paralax = (e) => {
        if (level === 'start') {
            setBp((e.pageX * -1 / 100) + 'px ' + (e.pageY * -1 / 100 - 70) + 'px, left bottom, center bottom, right bottom');
        }

    }

    const style = {
        backgroundPosition: bp
    }

    if (overlayBlur === 'show') {
        cls.push('ablur')
    }

    return (
        <div className={cls.join(' ')} style={style} onMouseMove={(e) => paralax(e)}>
            <div className="container_avito">
                {level === 'start' ? (<Start />) : ('')}
                {level === 'select' ? (<Select gameData={gameData} />) : ('')}
                {level === 'game' ? (<Game game={game} gameData={gameData} overlayBlur={overlayBlur} />) : ('')}
            </div>
        </ div >
    );
}

export default Canvas;