import React, { useContext } from 'react'
import { Context } from '../../context';

import billy_done from './img/billy_done.png'
import ilon_done from './img/ilon_done.png'
import kianu_done from './img/kianu_done.png'

import './SelectDone.css'

function SelectDone({ data }) {

    const { selectHero } = useContext(Context);

    let img = {
        billy: billy_done,
        ilon: ilon_done,
        kianu: kianu_done,
    }

    return (
        <div>
            <div className="hero-done">
                <img src={img[data.hero]} alt={'Ты помог ' + data.named} />
            </div>
            <div className="hero-done-btn" onClick={() => selectHero(data.hero)}>
                <span>{'Ты помог ' + data.named}</span>
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.438 0.5V6.38416C9.97039 6.38432 0 6.44296 0 23.0988C1.1304 11.9608 6.32331 11.8908 15.438 11.8906V18.3165L24.5517 9.40754L15.438 0.5Z" />
                </svg>
            </div>
        </div>
    )

}

export default SelectDone