import React, { useState, useEffect } from 'react';
import './Canvas.css';
import Start from '../Start';
import Select from '../Select';
import Game from '../Game';

function Canvas({ level, game }) {

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