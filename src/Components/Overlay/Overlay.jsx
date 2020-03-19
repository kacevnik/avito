import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context';
import './Overlay.css'

function Overlay() {

    const { setOverlay } = useContext(Context);

    const [cls, setCls] = useState(['overlay'])

    useEffect(() => {
        if (cls.length === 1) {
            setTimeout(() => {
                setCls([...cls, 'hide'])
                setOverlay(false)
            }, 1000)
        }
    })

    return (
        <div className={cls.join(' ')}></div>
    )
}

export default Overlay