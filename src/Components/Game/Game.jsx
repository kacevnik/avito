import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import './Game.css';
import avito_img from './img/avito_img.svg'
import stars from './img/stars.svg'
import my from './img/my.svg'
import hart from './img/hart.svg'
import messages from './img/message.png'
import one_messages from './img/one_message.png'
import arrow from './img/arrow.svg'
import empty from './img/empty.svg'
import sell_btn from './img/sell_btn.png'
import buy_btn from './img/buy_btn.png'
import vk from './img/vk.svg'
import tw from './img/tw.svg'
import fb from './img/fb.svg'

import blue_arrow from './img/blue_arrow.png'
import DoneLinks from '../DoneLinks/DoneLinks';

function Game({ game, overlayBlur, gameData, mobile }) {

    const { onFinalSellBuy, chanheResult, changeLevel, onOverlayBlur, selectHero } = useContext(Context);

    const { name, named, img, hero, data, result, push } = game;
    const [show, setShow] = useState('mess_empty');
    const [userTap, setUserTap] = useState(['userTap']);
    const [mesAnime, setMesAnime] = useState(['chat-on']);
    const [lastMess, setLastMess] = useState('hide');
    const [startChat, setStartChat] = useState(false);
    const [sdelka, setSdelka] = useState(data[0]);
    const [countMess, setCountMess] = useState(0);
    const [sellOrBuy, SetsellOrBuy] = useState(false);
    const [chat, setChat] = useState(false);
    const [chatMess, setChatMess] = useState(sdelka.chat[1]);
    const [chatMessData, setChatMessData] = useState([sdelka.chat[0]]);
    const [showHello, setShowHello] = useState(false)
    const [showHello2, setShowHello2] = useState(result ? false : true)
    const [subMenu, setSubMenu] = useState(["game-sub-menu"])
    const [slide, setSlide] = useState(false)
    const sell = data[0].img
    const buy = data[1].img
    let cls = [hero, show]

    const onSetsellOrBuy = (btn) => {
        SetsellOrBuy(true)
        setChat(true)
        if (btn === 'buy') {
            setSdelka(data[1])
            setChatMessData([])
            setChatMess(data[1].chat[0])
        } else {
            setSdelka(data[0])
            setChatMessData([data[0].chat[0]])
            setChatMess(data[0].chat[1])
        }
        setCountMess(0)
        onOverlayBlur('show')
    }

    const onSetShow = (btn) => {
        if (!startChat) {
            if (btn === 'mess_empty' && chat) {
                setShow('chat')
                SetsellOrBuy(false)
                if (chatMessData.length < 2 && show === 'buy') {
                    setShowHello(true)
                    setShowHello2(false)
                }
            } else {
                setShow(btn)
                setShowHello(false)
            }
        }
        onOverlayBlur('hide')
        setSubMenu(["game-sub-menu"])
    }

    if (overlayBlur === 'chat' && show !== 'chat') {
        setChat(true)
        onSetShow('mess_empty')
    }

    if (result) {
        cls = [cls[0], cls[1], 'result']
        if (!startChat) {
            setStartChat(true)
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

    useEffect(() => {
        if (!mobile) {
            document.querySelector('.seller_status').style.width = document.querySelector('.game-column-2 .nav-hero').offsetWidth + 1 + 'px'
            document.querySelector('.chat-body-wrapp').style.height = document.querySelector('.chat-body-wrapp').offsetHeight + 'px'
            document.querySelector('.game-column-2 .game-sub-menu').style.width = document.querySelector('.game-column-2 .nav-hero').offsetWidth + 1 + 'px'
            document.querySelector('.done-links').style.bottom = '-' + (document.querySelector('.done-links').offsetHeight + 1) + 'px'
        } else {
            document.querySelector('.game-column-2').style.height = document.querySelector('.game-column-1').offsetHeight + 'px'
        }
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

        if (el.mes[0].text.__html.indexOf('<img') >= 0) {
            cls.push('have-img')
        }
        return (<div key={el.id} className={cls.join(' ')}><div className="chat-message-mes"><span dangerouslySetInnerHTML={el.mes[0].text}></span></div><img src={elimg} alt={sdelka.seller} /></div>)
    })

    const onGameMore = () => {
        const action = data[0].state ? 'sell' : 'buy'
        onSetShow(action)
    }

    const onResult = () => {
        chanheResult(hero)
    }

    const moreChatMes = chatMess.mes.map((el) => {

        let cls = ['chat-on-mess']
        if (chatMess.user === 'final') {
            cls.push('final')
        }
        if (chatMess.user === 'final_end') {
            cls.push('final_end')
        }

        if (el.count === 2000) {
            return (<div key={el.text.__html} className={cls.join(' ')} onClick={() => onGameMore()}><span dangerouslySetInnerHTML={el.text}></span></div>)
        } else if (el.count === 3000) {
            return (<div key={el.text.__html} className={cls.join(' ')} onClick={() => onResult()}><span dangerouslySetInnerHTML={el.text}></span></div>)
        } else {
            return (<div key={el.text.__html} className={cls.join(' ')} onClick={() => onChatMove(el.text.__html, el.count)}><span dangerouslySetInnerHTML={el.text}></span></div>)
        }

    })

    const onChatMove = (el, count) => {
        setCountMess(countMess + count)
        let filterSdelka = { user: 'my', id: new Date().toString(), mes: [{ text: { __html: el }, count: count }] }
        let userMess = sdelka.chat.filter(b => b.id === hero + '_' + (countMess + count))
        setChatMessData([...chatMessData, filterSdelka, userMess[0]])

        if (userMess[0].user !== 'avito' && userMess[0].user !== 'avito_end') {
            setUserTap([...userTap, 'show'])
        }

        setMesAnime(['chat-on'])

        if (userMess[0].user !== 'avito_end') {
            setStartChat(true)
        } else {
            setStartChat(false)
            onFinalSellBuy(sdelka.name)
        }

        if (userMess[0].user === 'avito_end' && (!data[0].state && !data[1].state)) {
            setChatMess(sdelka.chat.filter(s => s.id === hero + '_' + (countMess + count + 2))[0])
        } else {
            setChatMess(sdelka.chat.filter(s => s.id === hero + '_' + (countMess + count + 1))[0])
        }

        setLastMess('hide')
        setSubMenu(["game-sub-menu"])

    }

    useEffect(() => {
        if (userTap.length === 2) {
            setTimeout(() => {
                setUserTap([userTap[0]])
            }, 1500)
        }
    }, [userTap])

    useEffect(() => {
        let sec = 1500
        if (chatMessData.length > 0) {
            if (chatMessData[chatMessData.length - 1].user === 'avito' || chatMessData[chatMessData.length - 1].user === 'avito_end') {
                sec = 100
            }
            if (mesAnime.length === 1) {
                setMesAnime([...mesAnime, 'hide'])
                setTimeout(() => {
                    setMesAnime([...mesAnime, 'show'])
                }, sec)
            }
        }
    }, [mesAnime, chatMessData])

    let url = ''
    const urlProgect = 'https://medialeaks.ru/pomogi_zvezdam_na_avito/' + hero + '.html'
    const title = 'Я помог ' + named + ' с покупками через Авито. Теперь твоя очередь!'
    const desc = 'Я помог ' + named + ' с покупками через Авито. Теперь твоя очередь!'
    const pimg = 'https://medialeaks.ru/wp-content/uploads/2020/04/' + hero + '.jpg'

    const shareVk = () => {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(urlProgect);
        url += '&title=' + encodeURIComponent(title);
        url += '&description=' + encodeURIComponent(desc);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }

    const shareTwitter = () => {
        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(title);
        url += '&url=' + encodeURIComponent(urlProgect);
        url += '&counturl=' + encodeURIComponent(urlProgect);
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }

    const shareFacebook = () => {
        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(title);
        url += '&p[summary]=' + encodeURIComponent(desc);
        url += '&p[url]=' + encodeURIComponent(urlProgect);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }

    const changHeromenu = (hero) => {
        setSubMenu(["game-sub-menu"])
        setShow('mess_empty')
        setChat(false)
        selectHero(hero)
        setShowHello(false)
        setShowHello2(true)
    }

    const subMenuElem = gameData.map((el) => {
        if (el.hero === hero) return ''
        return (
            <div key={el.hero} className="game-nav-m nav-hero" onClick={() => changHeromenu(el.hero)}>
                <span>{el.name}</span>
                <img src={el.img} alt={el.name} className="avatar" />
                <img src={arrow} alt="Стрелка" className="arrow" />
            </div >
        )
    })

    const onSubMenu = () => {
        if (subMenu.length === 1) {
            if (!startChat) {
                setSubMenu([...subMenu, 'show'])
            }
        } else {
            setSubMenu(["game-sub-menu"])
        }
        setShowHello2(false)
    }

    let clsSumMenuWrap = ['select-pro-link']
    if (subMenu.length > 1) {
        clsSumMenuWrap.push('shw')
    }

    const onSetShowW = (sb) => {
        setSlide(true)
        onSetShow(sb)
    }

    if (slide) {
        cls.push('slide')
    }

    const onBack = () => {
        if (!startChat || result) {
            setSlide(false)
        }

    }

    return (
        <div className={cls.join(' ')} >
            {!result ?
                (<div><div className="game-title title-billy">
                    <span><i>П</i><strong>омо</strong>г<strong>и</strong> <i>Б<strong>и</strong>л<strong>л</strong></i>и<strong><i>!</i></strong></span>
                </div>
                    <div className="game-title title-ilon">
                        <span><i>П</i><strong>омо</strong>г<strong>и</strong> <i>И<strong>ло</strong></i><strong>н</strong>у<strong><i>!</i></strong></span>
                    </div>
                    <div className="game-title title-kianu">
                        <span><i>П</i><strong>омо</strong>г<strong>и</strong> <i>К<strong>иан</strong>у</i><strong><i>!</i></strong></span>
                    </div></div>) : (<div className="game-title"><span><strong><i>У</i></strong>р<strong><i>а!</i></strong></span></div>)}

            <div className="Game">
                <img src={avito_img} alt="Avito" className="avito-hide-img" />
                <div className="game-column-1">
                    <div className="game-profile">
                        <div className="select-profiles">
                            <div className={clsSumMenuWrap.join(' ')} onClick={() => onSubMenu()}>
                                <span>Профили</span>
                                <img src={arrow} alt="Стрелка" />
                            </div>
                            <div className={subMenu.join(' ')}>
                                {subMenuElem}
                            </div>
                        </div>
                        <div className="game-profile-flex">
                            <div className="game-profile-data">
                                <div className="title"><span>Это ваш профиль,</span></div>
                                <div className="name"><span>{name}</span></div>
                            </div>
                            <div className="img">
                                <img src={img} alt={name} />
                            </div>
                        </div>
                        {showHello && !mobile ? (<img src={sdelka.message} alt="Привет!!" className="hello-message" />) : ('')}
                        {showHello2 && !mobile ? (<img src={data[0].message} alt="Привет!!" className="hello-message" />) : ('')}
                        <div className="game-stars">
                            <span>Рейтинг</span>
                            <span className="stars">
                                <img src={stars} alt="Рейтинг" />
                            </span>
                        </div>
                    </div>
                    <div className="mob-left-nav">
                        <div className="game-navbar">
                            <div className={'game-nav-m' + (show === 'sell' ? ' active' : '') + (startChat ? ' deseble' : '')} onClick={() => onSetShowW('sell')}>
                                <img src={my} alt="Мои объявления" />
                                <span>Мои объявления</span>
                            </div>
                            <div className={'game-nav-m' + (show === 'buy' ? ' active' : '') + (startChat ? ' deseble' : '')} onClick={() => onSetShowW('buy')} >
                                <img src={hart} alt="Избранное" />
                                <span>Избранное</span>
                            </div>
                            <div className={messCls.join(' ')} onClick={() => onSetShowW('mess_empty')}>
                                <img src={messages} alt="Сообщения" className="clxImg1" />
                                <img src={one_messages} alt="1 Сообщение" className="clxImg2" />
                                <span>Сообщения</span>
                            </div>
                            <div className={'game-nav-m nav-hero' + (startChat ? ' deseble' : '')} onClick={() => onSubMenu()}>
                                <span>{name}</span>
                                <img src={img} alt={name} className="avatar" />
                                <img src={arrow} alt="Стрелка" className="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="mob-sell-buy">
                        <div className="mob-sell-buy-title">
                            <div className="mob-sell-buy-item">Хочу продать:</div>
                            <div className="mob-sell-buy-item">Хочу купить:</div>
                        </div>
                        <div className="mob-sell-buy-content">
                            <div className="mob-sell-buy-wrap" onClick={() => onSetShowW('sell')} >
                                <img src={data[0].mob} alt="Хочу купить" />
                                <div className="title">
                                    <span>{data[0].title}</span>
                                </div>
                                <div className="price">{data[0].price}</div>
                                {!data[0].state ? <div className="sell_complite"></div> : ''}
                            </div>
                            <div className="mob-sell-buy-wrap" onClick={() => onSetShowW('buy')} >
                                <img src={data[1].mob} alt="Хочу продать" />
                                <div className="title">
                                    <span>{data[1].title}</span>
                                </div>
                                <div className="price">{data[1].price}</div>
                                {!data[1].state ? <div className="buy_complite"></div> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="game-sell">
                        <div className={'game-sell-wrap' + (startChat ? ' deseble' : '')} onClick={() => onSetShow('sell')}>
                            <img src={sell} alt="Хочу продать" />
                            {!data[0].state ? <div className="sell_complite"></div> : ''}
                        </div>
                    </div>
                    <div className="game-sell">
                        <div className={'game-sell-wrap' + (startChat ? ' deseble' : '')} onClick={() => onSetShow('buy')}>
                            <img src={buy} alt="Хочу купить" />
                            {!data[1].state ? <div className="buy_complite"></div> : ''}
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
                        <div className={'game-nav-m nav-hero' + (startChat ? ' deseble' : '')} onClick={() => onSubMenu()}>
                            <span>{name}</span>
                            <img src={img} alt={name} className="avatar" />
                            <img src={arrow} alt="Стрелка" className="arrow" />
                        </div>
                    </div>
                    <div className={subMenu.join(' ')}>
                        {subMenuElem}
                    </div>
                    <div className="mob-right-nav">
                        <div className={'mob-r-nav-back' + (startChat || result ? ' deseble' : '')} onClick={() => onBack()}>
                            <img src={blue_arrow} alt="Назад" />
                            <span>Назад</span>
                        </div>
                        <div className="mob-r-nav-state">
                            {show === 'chat' || show === 'mess_empty' ? (<img className="mess-m-top" src={messages} alt="Мои сообщения" />) : ('')}
                            {show === 'chat' || show === 'mess_empty' ? (<span>Мои сообщения</span>) : ('')}
                            {show === 'sell' ? (<img src={my} alt="Мои объявления" />) : ('')}
                            {show === 'sell' ? (<span>Мои объявления</span>) : ('')}
                            {show === 'buy' ? (<img src={hart} alt="Избранное" />) : ('')}
                            {show === 'buy' ? (<span>Избранное</span>) : ('')}
                        </div>
                        <div className="mob-r-nav-hero">
                            <img src={img} alt={name} />
                            {mobile && show === 'sell' && slide && push[2] ? (<img src={push[2]} alt="Привет!!" className="hello-message" />) : ('')}
                            {mobile && show === 'buy' && slide && push[1] ? (<img src={push[1]} alt="Привет!!" className="hello-message" />) : ('')}
                            {mobile && slide && show === 'mess_empty' && show !== 'chat' && push[0] ? (<img src={push[0]} alt="Привет!!" className="hello-message" />) : ('')}
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
                            {mobile ? (<img src={data[0].mob_big} alt={data[0].title} className="my-sell-img" />) : (<img src={data[0].img_big} alt={data[0].title} className="my-sell-img" />)}
                            {!data[0].state ? <div className="sell_complite"></div> : ''}
                        </div>
                        <div className="my-sell-desc">
                            <div className="atext">
                                <div className="title" dangerouslySetInnerHTML={{ __html: data[0].title }} />
                                <div className="sub-title"><span dangerouslySetInnerHTML={{ __html: data[0].subtitle }} /></div>
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
                        <div className="my-sell-img-wrap">
                            {mobile ? (<img src={data[1].mob_big} alt={data[1].title} className="my-sell-img" />) : (<img src={data[1].img_big} alt={data[1].title} className="my-sell-img" />)}
                            {!data[1].state ? <div className="buy_complite"></div> : ''}
                        </div>
                        <div className="my-sell-desc">
                            <div className="atext">
                                <div className="title" dangerouslySetInnerHTML={{ __html: data[1].title }} />
                                <div className="sub-title"><span dangerouslySetInnerHTML={{ __html: data[1].subtitle }} /></div>
                                <div className="price">{data[1].price}</div>
                                <div className="city">{data[1].city}</div>
                            </div>
                            <div className="my-sell-desc-but">
                                {data[1].state ? <span>
                                    <img src={buy_btn} alt="Купить" onClick={() => onSetsellOrBuy('buy')} />
                                </span> : ''}
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
                        <div className="chat-body-wrapp">
                            <div className="chat-body-wrapper">
                                <div className="chat-body">
                                    {chatMessages}
                                    <div className={userTap.join(' ')}>{sdelka.seller + ' печатает...'}</div>
                                </div>
                            </div>
                        </div>
                        <div className={mesAnime.join(' ')}>
                            {moreChatMes}
                        </div>
                    </div>
                    <div className="game-result">
                        <div className="chat-body"></div>
                        <div className={mesAnime.join(' ')}>
                            <div className="chang-hero" onClick={() => changeLevel('select')}>
                                <span>Помочь другому</span>
                            </div>
                            <div className="chang-hero">
                                <span>Поделиться</span>
                                <img src={vk} alt="Вконтакте" onClick={() => shareVk()} />
                                <img src={tw} alt="Twitter" onClick={() => shareTwitter()} />
                                <img src={fb} alt="Facebook" onClick={() => shareFacebook()} />
                            </div>
                        </div>
                    </div>
                </div>
                {!mobile ? <DoneLinks data={gameData} /> : ('')}
            </div >
        </ div>
    );
}

export default Game;
