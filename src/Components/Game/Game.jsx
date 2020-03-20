import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import './Game.css';
import stars from './img/stars.svg'
import my from './img/my.svg'
import hart from './img/hart.svg'
import messages from './img/message.png'
import one_messages from './img/one_message.png'
import arrow from './img/arrow.svg'
import empty from './img/empty.svg'
import sell_btn from './img/sell_btn.png'
import buy_btn from './img/buy_btn.png'

function Game({ game }) {

    const { onFinalSellBuy } = useContext(Context);

    const { name, img, hero, data, message, avito_img } = game;
    const [show, setShow] = useState('mess_empty');
    const [userTap, setUserTap] = useState(['userTap']);
    const [lastMess, setLastMess] = useState('hide');
    const [startChat, setStartChat] = useState(false);
    const [hideMes, setHideMes] = useState(false);
    const [sdelka, setSdelka] = useState(data[0]);
    const [countMess, setCountMess] = useState(0);
    const [sellOrBuy, SetsellOrBuy] = useState(false);
    const [chat, setChat] = useState(false);
    const [chatMess, setChatMess] = useState(sdelka.chat[1]);
    const [chatMessData, setChatMessSata] = useState([sdelka.chat[0]]);
    const sell = data[0].img
    const buy = data[1].img
    const cls = ['Game', hero, show]

    let styleMes = {}

    const onSetsellOrBuy = (btn) => {
        SetsellOrBuy(true)
        setChat(true)
        if (btn === 'buy') {
            setSdelka(data[1])
        } else {
            setSdelka(data[0])
        }
    }

    const onSetShow = (btn) => {
        if (!startChat) {
            if (btn === 'mess_empty' && chat) {
                setShow('chat')
                SetsellOrBuy(false)
                setHideMes(true)
            } else {
                setShow(btn)
            }
        }
    }

    let messCls = ['game-nav-m'];

    if (show === 'mess_empty' || show === 'chat') {
        messCls.push('active');
    }

    if (sellOrBuy) {
        messCls.push('one-message');
    }

    if (startChat) {
        messCls.push('deseble');
    }

    if (hideMes) {
        styleMes = { display: 'none' }
    }

    useEffect(() => {
        document.querySelector('.seller_status').style.width = document.querySelector('.nav-hero').offsetWidth + 1 + 'px'
        document.querySelector('.chat-body').style.height = document.querySelector('.chat-body').offsetHeight + 'px'
    })

    const chatMessages = chatMessData.map((el, idx) => {
        let cls = ['chat-messages', el.user]
        let elimg = sdelka.seller_img
        if (el.user === 'my') {
            elimg = img
        }
        if (el.user === 'avito' || el.user === 'avito_end') {
            elimg = avito_img
        }
        if (idx === chatMessData.length - 1 && chatMessData.length > 1) {
            if (lastMess === 'hide') {
                setTimeout(() => {
                    setLastMess('')
                }, 1500)

                cls.push(lastMess)
            }
        }
        return (<div key={el.id} className={cls.join(' ')}><div className="chat-message-mes"><span dangerouslySetInnerHTML={el.mes[0].text}></span></div><img src={elimg} alt={sdelka.seller} /></div>)
    })

    const moreChatMes = chatMess.mes.map((el) => {
        let cls = ['chat-on-mess']
        if (chatMess.user === 'final') {
            cls.push('final')
        }
        if (chatMess.user === 'final_end') {
            cls.push('final_end')
        }
        return (<div key={el.text.__html} className={cls.join(' ')} onClick={() => onChatMove(el.text.__html, el.count)}><span dangerouslySetInnerHTML={el.text}></span></div>)
    })

    const onChatMove = (el, count) => {
        setCountMess(countMess + count)
        let filterSdelka = { user: 'my', id: new Date().toString(), mes: [{ text: { __html: el }, count: count }] }
        let userMess = sdelka.chat.filter(b => b.id === hero + '_' + (countMess + count))
        setChatMessSata([...chatMessData, filterSdelka, userMess[0]])
        setChatMess(sdelka.chat.filter(s => s.id === hero + '_' + (countMess + count + 1))[0])
        if (userMess[0].user !== 'avito' && userMess[0].user !== 'avito_end') {
            setUserTap([...userTap, 'show'])
        }

        if (userMess[0].user !== 'avito_end') {
            setStartChat(true)
        } else {
            setStartChat(false)
            onFinalSellBuy(sdelka.name)
        }
        setLastMess('hide')

    }

    useEffect(() => {
        if (userTap.length === 2) {
            setTimeout(() => {
                setUserTap([userTap[0]])
            }, 1500)
        }
    }, [userTap])

    return (
        <div className={cls.join(' ')}>
            <div className="game-column-1">
                <div className="game-profile">
                    <div className="title"><span>Это ваш профиль,</span></div>
                    <div className="name"><span>{name}</span></div>
                    <div className="img">
                        <img src={img} alt={name} />
                    </div>
                    <img src={message} alt="Привет!!" className="hello-message" style={styleMes} />
                    <div className="game-stars">
                        <span>Рейтинг</span>
                        <span className="stars">
                            <img src={stars} alt="Рейтинг" />
                        </span>
                    </div>
                </div>
                <div className="game-sell">
                    <div className="game-sell-wrap" onClick={() => onSetShow('sell')}>
                        <img src={sell} alt="Хочу продать" />
                        {!data[0].state ? <div class="sell_complite"></div> : ''}
                    </div>
                </div>
                <div className="game-sell">
                    <div className="game-sell-wrap" onClick={() => onSetShow('buy')}>
                        <img src={buy} alt="Хочу купить" />
                    </div>
                </div>
            </div>
            <div className="game-column-2">
                <div className="game-navbar">
                    <div className={'game-nav-m' + (show === 'sell' ? ' active' : '') + (startChat ? ' deseble' : '')} onClick={() => onSetShow('sell')}>
                        <img src={my} alt="Мои объявления" />
                        <span>Мои объявления</span>
                    </div>
                    <div className={'game-nav-m' + (show === 'buy' ? ' active' : '') + (startChat ? ' deseble' : '')} onClick={() => onSetShow('buy')} >
                        <img src={hart} alt="Избранное" />
                        <span>Избранное</span>
                    </div>
                    <div className={messCls.join(' ')} onClick={() => onSetShow('mess_empty')}>
                        <img src={messages} alt="Сообщения" className="clxImg1" />
                        <img src={one_messages} alt="1 Сообщение" className="clxImg2" />
                        <span>Сообщения</span>
                    </div>
                    <div className={'game-nav-m nav-hero' + (startChat ? ' deseble' : '')}>
                        <span>{name}</span>
                        <img src={img} alt={name} className="avatar" />
                        <img src={arrow} alt="Стрелка" className="arrow" />
                    </div>
                </div>
                <div className="empty-result">
                    <img src={empty} alt="Начни играть" />
                    <div className="title">
                        <span>{name.split(' ')[0]}, у вас нет новых сообщений :(</span>
                    </div>
                    <div className="mess">
                        Продайте или купите что-нибудь<br />
                        и диалоги не заставят себя долго ждать!
                    </div>
                </div>
                <div className="my-sell">
                    <div className="my-sell-img-wrap">
                        <img src={data[0].img_big} alt={data[0].title} className="my-sell-img" />
                        {!data[0].state ? <div class="sell_complite"></div> : ''}
                    </div>
                    <div className="my-sell-desc">
                        <div className="atext">
                            <div className="title">{data[0].title}</div>
                            <div className="sub-title"><span>{data[0].subtitle}</span></div>
                            <div className="price">{data[0].price}</div>
                            <div className="city">{data[0].city}</div>
                        </div>
                        <div className="my-sell-desc-but">
                            {data[0].state ? <span>
                                <img src={sell_btn} alt="Продать" onClick={() => onSetsellOrBuy('sell')} />
                            </span> : ''}
                        </div>
                    </div>
                </div>
                <div className="my-buy">
                    <img src={data[1].img_big} alt={data[1].title} className="my-sell-img" />
                    <div className="my-sell-desc">
                        <div className="atext">
                            <div className="title">{data[1].title}</div>
                            <div className="sub-title"><span>{data[1].subtitle}</span></div>
                            <div className="price">{data[1].price}</div>
                            <div className="city">{data[1].city}</div>
                        </div>
                        <div className="my-sell-desc-but">
                            <span>
                                <img src={buy_btn} alt="Купить" onClick={() => onSetsellOrBuy('buy')} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="game-chat">
                    <div className="seller">
                        <div className="seller-profile">
                            <img src={sdelka.seller_img} alt={sdelka.seller} />
                            <div className="seller-profile-text">
                                <div className="seller-name">{sdelka.seller}</div>
                                <div className="seller-subname">{sdelka.seller_text}</div>
                            </div>
                        </div>
                        <div className="seller_status">
                            <span>{sdelka.seller_status}</span>
                        </div>
                    </div>
                    <div className="chat-body">
                        {chatMessages}
                        <div className={userTap.join(' ')}>{sdelka.seller + ' печатает...'}</div>
                    </div>
                    <div className="chat-on">
                        {moreChatMes}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Game;
