import React, { useContext } from 'react'

import './DoneLinks.css'
import { Context } from '../../context'

function DoneLinks({ data }) {

    const { selectHero } = useContext(Context)

    const links = data.map(el => {
        let cls = ['done-links-item', el.hero]
        if (!el.result) return ''
        return (
            <div key={el.hero} className={cls.join(' ')} onClick={() => selectHero(el.hero)}>
                <span>{'Ты помог ' + el.named}</span>
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.438 0.5V6.38416C9.97039 6.38432 0 6.44296 0 23.0988C1.1304 11.9608 6.32331 11.8908 15.438 11.8906V18.3165L24.5517 9.40754L15.438 0.5Z" />
                </svg>
            </div>
        )
    })

    return (
        <div className="done-links">
            {links}
        </div>
    )

}

export default DoneLinks