import React, { useEffect, useContext } from 'react';
import './OverlayBlur.css';
import { Context } from '../../context';

import blur from './img/blur.gif'
import blur_mob from './img/blur_mob.png'

function OverlayBlur({ overlayBlur, mobile, game }) {
    console.log(game)
    const { onOverlayBlur } = useContext(Context)

    useEffect(() => {
        if (!mobile) {
            if (overlayBlur === 'show') {
                setTimeout(() => {
                    onOverlayBlur('chat')
                }, 2000)
            }
        }
    }, [overlayBlur, onOverlayBlur, mobile])

    const mobOver = () => {
        onOverlayBlur('chat')
    }

    return (
        <div className="overlay-blur">
            {!mobile ? (<img src={blur} alt="Ждем загрузки" />) : (<div className="new-mess" onClick={() => mobOver()}><div className="new-mess-img"><img src={blur_mob} alt="Новое сообщение" /><span>{game.name.split(' ')[0]}, у вас новое сообщение</span></div><div className="new-mess-btn"><span>Открыть</span></div></div>)}
        </div>
    );
}

export default OverlayBlur;
