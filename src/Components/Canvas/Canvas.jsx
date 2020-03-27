import React, { useState, useEffect } from 'react';
import './Canvas.css';
import Start from '../Start';
import Select from '../Select';
import Game from '../Game';

function Canvas({ level, game, gameData, overlayBlur, mobile }) {

    const [bp, setBp] = useState('center -70px, left bottom, center bottom, right bottom')
    let cls = ['Canvas', level];

    useEffect(() => {

        if (level !== 'start' || mobile) {
            setBp('')
        }

    }, [bp, level, mobile])

    const paralax = (e) => {
        if (level === 'start' && !mobile) {
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
                {level === 'start' ? (<Start mobile={mobile} />) : ('')}
                {level === 'select' ? (<Select gameData={gameData} />) : ('')}
                {level === 'game' ? (<Game game={game} gameData={gameData} overlayBlur={overlayBlur} mobile={mobile} />) : ('')}
            </div>
        </ div >
    );
}

export default Canvas;