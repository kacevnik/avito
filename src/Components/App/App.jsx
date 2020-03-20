import React, { useState } from 'react';
import { Context } from '../../context';
import './App.css';
import Canvas from '../Canvas';
import Overlay from '../Overlay';
import avito_img from './img/avito_img.svg'
import img_ilon from './img/ilon.svg'
import img_billy from './img/billy.svg'
import img_kianu from './img/kianu.svg'
import ilon_sell from './img/ilon_sell.svg'
import billy_sell from './img/billy_sell.svg'
import kianu_sell from './img/kianu_sell.svg'
import ilon_buy from './img/ilon_buy.svg'
import billy_buy from './img/billy_buy.svg'
import kianu_buy from './img/kianu_buy.svg'
import billy_mess from './img/billy_mess.svg'
import ilon_mess from './img/ilon_mess.svg'
import kianu_mess from './img/kianu_mess.svg'
import billy_sell_big from './img/billy_sell_big.svg'
import ilon_sell_big from './img/ilon_sell_big.svg'
import kianu_sell_big from './img/kianu_sell_big.svg'
import billy_buy_big from './img/billy_buy_big.svg'
import ilon_buy_big from './img/ilon_buy_big.svg'
import kianu_buy_big from './img/kianu_buy_big.svg'
import billy_seller from './img/billy_seller.svg'
import billy_seller_2 from './img/billy_seller_2.svg'

function App() {

  const [levels, setLevel] = useState(['start', 'select', 'game', 'final'])
  const [hero, setHero] = useState('ilon')
  const [rem, setRem] = useState(window.innerWidth / 192)
  const [overlay, setOverlay] = useState(true)
  const [gameData, setGameData] = useState(
    [
      {
        hero: 'billy',
        avito_img: avito_img,
        img: img_billy,
        name: 'Билли Айлиш',
        message: billy_mess,
        data: [
          {
            name: 'billy_sell',
            state: true,
            img: billy_sell,
            img_big: billy_sell_big,
            title: 'Альбом Билли Айлиш «When We All Fall Asleep, Where Do We Go?»',
            subtitle: 'Продаю свой дебютный альбом с автографом. Все подробности — в ЛС :))',
            price: '15 999 ₽',
            city: 'Москва',
            seller: 'Лилия Пупкова',
            seller_img: billy_seller,
            seller_text: 'Потенциальный покупатель',
            seller_status: 'Пора бы уже продать этот альбомчик',
            chat: [
              { user: 'he', id: 'billy_1', mes: [{ text: { __html: 'ААА! Еще продаете??? Хочу купить ваш альбом с автографом!' }, count: 0 }] },
              { user: 'my', id: 'billy_2', mes: [{ text: { __html: 'Привет! Да, еще продаю.' }, count: 3 }] },
              { user: 'he', id: 'billy_3', mes: [{ text: { __html: 'Я куплю альбом у самой Билли Айлиш! Он новый или упаковка вскрыта?' }, count: 1 }] },
              { user: 'my', id: 'billy_4', mes: [{ text: { __html: 'Абсолютно новый' }, count: 2 }, { text: { __html: 'Вскрывала, чтобы расписаться на нем' }, count: 2 }] },
              { user: 'he', id: 'billy_5', mes: [{ text: { __html: 'Ладно, это не имеет значения) Только есть одна проблема: я сейчас не в России, поэтому я бы хотела перевести вам денег и забронировать альбом, чтобы никто не купил его до моего возвращения.' }, count: 0 }] },
              { user: 'my', id: 'billy_6', mes: [{ text: { __html: 'Мне это не очень удобно' }, count: 2 }, { text: { __html: 'Может быть, попросите забрать кого-то из знакомых?' }, count: 4 }] },
              { user: 'he', id: 'billy_7', mes: [{ text: { __html: 'Очень вас прошу! Это станет лучшим подарком!' }, count: 0 }] },
              { user: 'my', id: 'billy_8', mes: [{ text: { __html: 'Окей. Что требуется от меня?' }, count: 4 }] },
              { user: 'he', id: 'billy_9', mes: [{ text: { __html: 'Не очень хочется напрягать людей... Может, все-таки перевод?' }, count: 0 }] },
              { user: 'my', id: 'billy_10', mes: [{ text: { __html: 'Окей. Что требуется от меня?' }, count: 2 }] },
              { user: 'he', id: 'billy_11', mes: [{ text: { __html: 'Чтобы я мог перевести деньги, пришлите мне номер своей карты, дату и номер выдачи, а также код, расположенный с обратной стороны карты' }, count: 0 }] },
              { user: 'my', id: 'billy_12', mes: [{ text: { __html: 'Хорошо, секунду' }, count: 2 }, { text: { __html: 'А зачем вам столько информации?' }, count: 2 }] },
              { user: 'avito', id: 'billy_13', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'billy_14', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 4 }] },
              { user: 'avito_end', id: 'billy_15', mes: [{ text: { __html: '<div class="final-mess-no">Ты не прав!</div>Аккуратнее! Этот покупатель пытается выяснить у Билли личные данные — номер и код банковской карты. Разглашение такой информации ставит под угрозу финансовую и личную безопасность! Avito рекомендует держать свои личные данные при себе.' }, count: 2 }] },
              { user: 'final_end', id: 'billy_16', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2 }] },
              { user: 'avito_end', id: 'billy_17', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>АЙ правда! Этот покупатель пытается выяснить у Билли личные данные — номер и код банковской карты. Разглашение такой информации ставит под угрозу финансовую и личную безопасность! Avito рекомендует держать свои личные данные при себе.' }, count: 2 }] },
              { user: 'final_end', id: 'billy_18', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2 }] },
            ],
          },
          {
            name: 'billy_buy',
            state: true,
            img: billy_buy,
            img_big: billy_buy_big,
            title: 'Топовое худи от Goshan',
            subtitle: 'Самый popular русский streetwear-бренд. Экслюзив!',
            price: 'от 300 000 ₽',
            city: 'Москва',
            seller: 'Гоша Рубчивский',
            seller_img: billy_seller_2,
            seller_text: 'Продавец топового шмота',
            seller_status: 'Пора обновить гардероб',
            chat: [
              { user: 'he', id: 'billy_buy_1', mes: ['Сообщение продовца 1'] },
              { user: 'my', id: 'billy_buy_1', mes: ['Сообщение билли 2'] },
              { user: 'he', id: 'billy_buy_2', mes: ['Сообщение продовца 2'] },
              { user: 'my', id: 'billy_buy_2', mes: ['Сообщение билли 2', 'Сообщение билли 3'] },
            ],
          },
        ],

      },
      {
        hero: 'ilon',
        img: img_ilon,
        name: 'Илон Маск',
        message: ilon_mess,
        data: [
          {
            state: true,
            img: ilon_sell,
            img_big: ilon_sell_big,
            title: 'Tesla Model S, моя любимая ласточка',
            subtitle: 'Пробег: 420 км Состояние: как новенькая Цвет: черный',
            price: '10 000 000 ₽',
            city: 'Москва',
          },
          {
            state: true,
            img: ilon_buy,
            img_big: ilon_buy_big,
            title: 'Шапка великого Гагарина',
            subtitle: 'Продаю шапку, которую носил Юрий Гагарин. В отличном состоянии, почти как новая. Цвет желтый, производство советское.',
            price: '59 500 ₽',
            city: 'Москва',
          },
        ],
      },
      {
        hero: 'kianu',
        img: img_kianu,
        name: 'Киану Ривз',
        message: kianu_mess,
        data: [
          {
            state: true,
            img: kianu_sell,
            img_big: kianu_sell_big,
            title: 'iPhone 8 б/у',
            subtitle: 'Продаю свой айфон. Пользовался им около года, но решил купить новый. В хорошем состоянии! Только Москва.',
            price: '15 000 ₽',
            city: 'Москва'
          },
          {
            state: true,
            img: kianu_buy,
            img_big: kianu_buy_big,
            title: 'Лучшие орхидеи на любой вкус и цвет',
            subtitle: 'Имеются разные сорта в наличии: простые фаленопсисы и редкие селективные орхидеи! Возможна доставка ростков по всей России! Лучшее качество.',
            price: 'от 300 до 25 0000 ₽',
            city: 'Москва',
          },
        ],
      },
    ]
  )

  const level = levels[0];

  const game = gameData.filter(el => el.hero === hero)

  const changeLevel = () => {
    setLevel(levels.filter(el => el !== level))
    setOverlay(true);
  }

  const selectHero = (hero) => {
    setHero(hero)
    changeLevel()
  }

  const onFinalSellBuy = (sdelka) => {
    setGameData(gameData.map(el => {
      el.data.map(a => {
        if (a.name === sdelka) {
          a.state = false
        }
        return a
      })
      return el
    }))
  }

  window.addEventListener("resize", () => {
    setRem(window.innerWidth / 192)
  })

  console.log(window.innerWidth)

  const st = {
    fontSize: rem + 'px'
  }

  return (
    <Context.Provider value={{
      changeLevel, selectHero, setOverlay, onFinalSellBuy
    }}>
      <div className="App" style={st}>
        <Canvas level={level} game={game[0]} />
        {overlay ? (<Overlay />) : ('')}
      </div>
    </Context.Provider>
  );
}

export default App;
