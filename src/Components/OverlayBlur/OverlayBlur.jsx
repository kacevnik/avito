import React, { useEffect, useContext } from 'react';
import './OverlayBlur.css';
import { Context } from '../../context';

import blur from './img/blur.gif'

function OverlayBlur({ overlayBlur }) {

    const { onOverlayBlur } = useContext(Context)

    useEffect(() => {
        console.log()
        if (overlayBlur === 'show') {
            setTimeout(() => {
                onOverlayBlur('chat')
            }, 2000)
        }
    }, [overlayBlur, onOverlayBlur])
    return (
        <div className="overlay-blur">
            <img src={blur} alt="Ждем загрузки" />
        </div>
    );
}

export default OverlayBlur;
