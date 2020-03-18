import React, { useState } from 'react';
import './Canvas.css';
import Start from '../Start';
import Select from '../Select';
import Game from '../Game';

function Canvas({ level, game }) {

    const [bp, setBp] = useState('center -70px, left bottom, center bottom, right bottom')
    let cls = ['Canvas', level];

    const paralax = (e) => {
        if (level === 'start') {
            setBp((e.pageX * -1 / 100) + 'px ' + (e.pageY * -1 / 100 - 70) + 'px, left bottom, center bottom, right bottom');
        }

        if (level === 'select') {
            setBp('left top, right top, left bottom, right bottom');
        }

        if (level === 'game') {
            setBp('center bottom');
        }
    }

    const style = {
        backgroundPosition: bp
    }

    return (
        <div className={cls.join(' ')} style={style} onMouseMove={(e) => paralax(e)}>
            <div className="container">
                {level === 'start' ? (<Start />) : ('')}
                {level === 'select' ? (<Select />) : ('')}
                {level === 'game' ? (<Game game={game} />) : ('')}
            </div>
        </ div >
    );
}

export default Canvas;