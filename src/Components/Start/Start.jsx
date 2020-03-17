import React from 'react';
import './Start.css';
import logo from './img/start-logo.svg'
import title from './img/title.svg'

function Start() {
    const ist = {
        fontSize: '30px',
        fontWeight: 'normal'
    }
    return (
        <div className="Start">
            <span className="start-logo">
                <img src={logo} alt="avito" />
            </span>
            <div className="start-header">
                <div className="title">
                    <img src={title} alt="Спаси Билли, Киану и Илона!" />
                </div>
                <div className="sub-title">
                    Герои мемов попадают в непростые ситуации в России
                </div>
            </div>
            <div className="start-content">
                <span>
                    После ЧМ по футболу в Россию стало приезжать больше иностранцев. Представь, что твоим соседом по лестничной площадке стали Илон Маск, Билли Айлиш или Киану Ривз. И они живут как обычные люди! Ходят в Пятёрочку, отдыхают на черноморском побережье, совершают сделки на Авито. Твоя задача — научить звезд совершать сделки онлайн успешно и безопасно. И если с “Пятёрочкой” все понятно, то с покупками и продажами в интернете все немного сложнее. Посмотрим, сможешь ли ты помочь иностранцам и самому себе не попасть в сложную ситуацию!
                </span>
                <p>
                    <i style={ist}>П</i>осмотрим, сможешь ли ты помочь иностранцам<br />и самому не попасть в непростую ситуацию!
                </p>
            </div>
            <button>Играть</button>
        </div>
    );
}

export default Start;
