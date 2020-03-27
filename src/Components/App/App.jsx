import React, { useState } from 'react';
import { Context } from '../../context';
import './App.css';
import Canvas from '../Canvas';
import Overlay from '../Overlay';
import OverlayBlur from '../OverlayBlur';
import img_ilon from './img/ilon.png'
import img_billy from './img/billy.png'
import img_kianu from './img/kianu.png'
import ilon_sell from './img/ilon_sell.svg'
import billy_sell from './img/billy_sell.svg'
import kianu_sell from './img/kianu_sell.svg'
import ilon_buy from './img/ilon_buy.svg'
import billy_buy from './img/billy_buy.svg'
import kianu_buy from './img/kianu_buy.svg'
import billy_mess_sell from './img/billy_mess_sell.svg'
import ilon_mess_sell from './img/ilon_mess_sell.svg'
import kianu_mess_sell from './img/kianu_mess_sell.svg'
import billy_mess_buy from './img/billy_mess_buy.svg'
import ilon_mess_buy from './img/ilon_mess_buy.svg'
import kianu_mess_buy from './img/kianu_mess_buy.svg'
import billy_sell_big from './img/billy_sell_big.svg'
import ilon_sell_big from './img/ilon_sell_big.svg'
import kianu_sell_big from './img/kianu_sell_big.svg'
import billy_buy_big from './img/billy_buy_big.svg'
import ilon_buy_big from './img/ilon_buy_big.svg'
import kianu_buy_big from './img/kianu_buy_big.svg'
import billy_seller from './img/billy_seller.svg'
import ilon_seller from './img/ilon_seller.svg'
import kianu_seller from './img/kianu_seller.svg'
import billy_seller_2 from './img/billy_seller_2.svg'
import ilon_seller_2 from './img/ilon_seller_2.svg'
import kianu_seller_2 from './img/kianu_seller_2.svg'

import billy_sell_mob from './img/billy_sell_mob.png'
import ilon_sell_mob from './img/ilon_sell_mob.png'
import kianu_sell_mob from './img/kianu_sell_mob.png'

import billy_buy_mob from './img/billy_buy_mob.png'
import ilon_buy_mob from './img/ilon_buy_mob.png'
import kianu_buy_mob from './img/kianu_buy_mob.png'

import billy_sell_mob_big from './img/billy_sell_mob_big.png'
import ilon_sell_mob_big from './img/ilon_sell_mob_big.png'
import kianu_sell_mob_big from './img/kianu_sell_mob_big.png'

import billy_buy_mob_big from './img/billy_buy_mob_big.png'
import ilon_buy_mob_big from './img/ilon_buy_mob_big.png'
import kianu_buy_mob_big from './img/kianu_buy_mob_big.png'

import billy_mess_push_mob from './img/billy_mess_push_mob.png'
import ilon_mess_push_mob from './img/ilon_mess_push_mob.png'

import ilon_mess_sell_mob from './img/ilon_mess_sell_mob.png'

import billy_mess_buy_mob from './img/billy_mess_buy_mob.png'
import ilon_mess_buy_mob from './img/ilon_mess_buy_mob.png'
import kianu_mess_buy_mob from './img/kianu_mess_buy_mob.png'

import scan from './img/scan.png'
import gagarin from './img/gagarin.png'

function App() {

  const [mobile, setMobile] = useState(false)

  const getRem = () => {
    if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
      setMobile(true)
      return window.innerWidth / 37.5
    } else {
      setMobile(false)
    }
    return window.innerWidth / 192
  }

  const [level, setLevel] = useState('game')
  const [hero, setHero] = useState('ilon')
  const [rem, setRem] = useState(getRem)
  const [overlay, setOverlay] = useState(true)
  const [overlayBlur, setOverlayBlur] = useState('hide')

  const [gameData, setGameData] = useState(
    [
      {
        hero: 'billy',
        img: img_billy,
        name: 'Билли Айлиш',
        named: 'Билли Айлиш',
        result: false,
        push: [billy_mess_push_mob, billy_mess_buy_mob, false],
        data: [
          {
            name: 'billy_sell',
            state: true,
            img: billy_sell,
            img_big: billy_sell_big,
            mob: billy_sell_mob,
            mob_big: billy_sell_mob_big,
            message: billy_mess_sell,
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
              { user: 'he', id: 'billy_11', mes: [{ text: { __html: 'Чтобы я могла перевести деньги, пришлите мне номер своей карты, дату и номер выдачи, а также код, расположенный с обратной стороны карты' }, count: 0 }] },
              { user: 'my', id: 'billy_12', mes: [{ text: { __html: 'Хорошо, секунду' }, count: 2 }, { text: { __html: 'А зачем вам столько информации?' }, count: 2 }] },
              { user: 'avito', id: 'billy_13', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'billy_14', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 5 }] },
              { user: 'avito_end', id: 'billy_15', mes: [{ text: { __html: '<div class="final-mess-no">Ты не прав!</div>Аккуратнее! Этот покупатель пытается выяснить у Билли личные данные — номер и код банковской карты. Разглашение такой информации ставит под угрозу финансовую и личную безопасность! Авито рекомендует держать свои личные данные при себе.' }, count: 2 }] },
              { user: 'final_end', id: 'billy_16', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'billy_17', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
              { user: 'avito_end', id: 'billy_18', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>АЙ правда! Этот покупатель пытается выяснить у Билли личные данные — номер и код банковской карты. Разглашение такой информации ставит под угрозу финансовую и личную безопасность! Avito рекомендует держать свои личные данные при себе.' }, count: 2 }] },
              { user: 'final_end', id: 'billy_19', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'billy_20', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
            ],
          },
          {
            name: 'billy_buy',
            state: true,
            img: billy_buy,
            img_big: billy_buy_big,
            mob: billy_buy_mob,
            mob_big: billy_buy_mob_big,
            message: billy_mess_buy,
            title: 'Топовое худи от Goshan',
            subtitle: 'Самый popular русский streetwear-бренд.<br>Экслюзив!',
            price: 'от 300 000 ₽',
            city: 'Москва',
            seller: 'Жора Рубчивский',
            seller_img: billy_seller_2,
            seller_text: 'Продавец топового шмота',
            seller_status: 'Пора обновить гардероб',
            chat: [
              { user: 'my', id: 'billy_1', mes: [{ text: { __html: 'Привет! Мне очень нравятся ваши наряды, почти так же безумно, как мой костюм пчеловода на American Music Awards, ха-ха. Хочу купить!' }, count: 3 }] },
              { user: 'he', id: 'billy_3', mes: [{ text: { __html: 'Привет! Вау, как приятно слышать это от самой Билли Айлиш :) Я могу переслать их тебе по почте, у меня нет шоурума.' }, count: 0 }] },
              { user: 'my', id: 'billy_4', mes: [{ text: { __html: 'Но я бы хотела примерить..' }, count: 2 }, { text: { __html: 'Окей, мне подходит' }, count: 4 }] },
              { user: 'he', id: 'billy_5', mes: [{ text: { __html: 'Все мои костюмы — one size, они подойдут любому.' }, count: 0 }] },
              { user: 'my', id: 'billy_6', mes: [{ text: { __html: 'Хорошо. Как заказать?' }, count: 4 }] },
              { user: 'he', id: 'billy_7', mes: [{ text: { __html: 'Супер, ты же увидела, что все костюмы — one size? Подойдут любому. Выбирай!' }, count: 0 }] },
              { user: 'my', id: 'billy_8', mes: [{ text: { __html: 'Хорошо. Как заказать?' }, count: 2 }] },
              { user: 'he', id: 'billy_9', mes: [{ text: { __html: 'С этим есть небольшая проблема: за моими нарядами выстраивает очередь. Но за внесенную предоплату могу внести тебя в лист ожидания.' }, count: 0 }] },
              { user: 'my', id: 'billy_10', mes: [{ text: { __html: 'А какие у вас гарантии?' }, count: 2 }, { text: { __html: 'Давайте номер карты, куда перечислять деньги!' }, count: 2 }] },
              { user: 'avito', id: 'billy_11', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'billy_12', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 5 }] },
              { user: 'avito_end', id: 'billy_13', mes: [{ text: { __html: '<div class="final-mess-no">Ты не прав!</div>Аккуратнее! Этот продавец отказывается встречаться лично и пытается получить предоплату за свой товар. Часто в таких случаях покупателю не удается вернуть свои деньги: продавец просто пропадает. Avito рекомендует постараться найти аналогичный товар или воспользоваться услугами проверенных продавцов и магазинов.' }, count: 2 }] },
              { user: 'final_end', id: 'billy_14', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'billy_15', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
              { user: 'avito_end', id: 'billy_16', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>И правда! Этот продавец отказывается встречаться лично и пытается получить предоплату за свой товар. Часто в таких случаях покупателю не удается вернуть свои деньги: продавец просто пропадает. Avito рекомендует постараться найти аналогичный товар или воспользоваться услугами проверенных продавцов и магазинов.' }, count: 2 }] },
              { user: 'final_end', id: 'billy_17', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'billy_18', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
            ],
          },
        ],

      },
      {
        hero: 'ilon',
        img: img_ilon,
        name: 'Илон Маск',
        named: 'Илону Маску',
        result: false,
        push: [ilon_mess_push_mob, ilon_mess_buy_mob, ilon_mess_sell_mob],
        data: [
          {
            name: 'ilon_sell',
            state: true,
            img: ilon_sell,
            img_big: ilon_sell_big,
            mob: ilon_sell_mob,
            mob_big: ilon_sell_mob_big,
            message: ilon_mess_sell,
            title: 'Tesla Model S, моя любимая ласточка',
            subtitle: 'Пробег: 420 км<br>Состояние: как новенькая<br>Цвет: черный',
            price: '10 000 000 ₽',
            city: 'Москва',
            seller: 'Джон Рубин',
            seller_img: ilon_seller,
            seller_text: 'Потенциальный покупатель',
            seller_status: 'Помоги выгодно и безопасно продать машину',
            chat: [
              { user: 'he', id: 'ilon_1', mes: [{ text: { __html: 'Здравствуйте! Машину не продали?' }, count: 0 }] },
              { user: 'my', id: 'ilon_2', mes: [{ text: { __html: 'Здравствуйте! Нет, вы первый, кто написал мне.' }, count: 3 }] },
              { user: 'he', id: 'ilon_3', mes: [{ text: { __html: 'Хорошо, понял. А машина в идеальном состоянии или есть царапины? Можем поторговаться?' }, count: 1 }] },
              { user: 'my', id: 'ilon_4', mes: [{ text: { __html: 'Давайте поторгуемся' }, count: 2 }, { text: { __html: 'Нет — это машина с историей, продаю за полную стоимость.' }, count: 4 }] },
              { user: 'he', id: 'ilon_5', mes: [{ text: { __html: 'Отлично! За 5 000 000 я ее возьму, скинете 100 тысяч?' }, count: 0 }] },
              { user: 'my', id: 'ilon_6', mes: [{ text: { __html: '100 — это много. Могу скинуть не больше 50. Согласны?' }, count: 4 }, { text: { __html: 'Так и быть, договорились.' }, count: 4 }] },
              { user: 'he', id: 'ilon_7', mes: [{ text: { __html: 'Эх, но попробовать стоило. Я все равно хочу ее взять!' }, count: 0 }] },
              { user: 'my', id: 'ilon_8', mes: [{ text: { __html: 'Ну и отлично! Приедете посмотреть?' }, count: 2 }] },
              { user: 'he', id: 'ilon_9', mes: [{ text: { __html: 'Договорились. Подготовьте ПТС и свидетельство о регистрации ТС — я хотел бы на них взглянуть. А еще сфотографируйте номера двигателя и кузова и пришлите фото мне. Хорошо?' }, count: 0 }] },
              { user: 'my', id: 'ilon_10', mes: [{ text: { __html: 'А зачем вам эта информация? Вы точно не мошенник?' }, count: 2 }, { text: { __html: 'Да, конечно. Насколько я знаю, в России эти документы нужны, чтобы удостовериться в том, что машина в порядке.' }, count: 2 }] },
              { user: 'avito', id: 'ilon_11', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'ilon_12', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 5 }] },
              { user: 'avito_end', id: 'ilon_13', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>Для того, чтобы купить машину с рук, покупателю нужно увидеть ПТС и свидетельство о регистрации транспортного средства — таким образом он сможет проверить машину на угон или розыск. А номера двигателя и кузова должны быть выбиты одним шрифтом и не иметь следов механической обработки (краски, сварки). Твой покупатель просто был бдительным — ведь сложно поверить, что покупаешь машину у Илона Маска!' }, count: 2 }] },
              { user: 'final_end', id: 'ilon_14', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'ilon_15', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
              { user: 'avito_end', id: 'ilon_16', mes: [{ text: { __html: '<div class="final-mess-no">Ты не прав!</div>Для того, чтобы купить машину с рук, покупателю нужно увидеть ПТС и свидетельство о регистрации транспортного средства — таким образом он сможет проверить машину на угон или розыск. А номера двигателя и кузова должны быть выбиты одним шрифтом и не иметь следов механической обработки (краски, сварки). Твой покупатель просто был бдительным — ведь сложно поверить, что покупаешь машину у Илона Маска!' }, count: 2 }] },
              { user: 'final_end', id: 'ilon_17', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'ilon_18', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
            ],
          },
          {
            name: 'ilon_buy',
            state: true,
            img: ilon_buy,
            img_big: ilon_buy_big,
            mob: ilon_buy_mob,
            mob_big: ilon_buy_mob_big,
            message: ilon_mess_buy,
            title: 'Шапка великого Гагарина',
            subtitle: 'Продаю шапку, которую носил Юрий Гагарин.<br>В отличном состоянии, почти как новая. Цвет желтый, производство советское.',
            price: '59 500 ₽',
            city: 'Москва',
            seller: 'Михон Гагарин',
            seller_img: ilon_seller_2,
            seller_text: 'Продавец космической шапки',
            seller_status: 'Купи шапку, в которой летал в космос Гагарин',
            chat: [
              { user: 'my', id: 'ilon_1', mes: [{ text: { __html: 'Добрый день! Вы что, правда продаете кепку Юрия Гагарина??? Откуда она у вас, вы его родственник?' }, count: 3 }] },
              { user: 'he', id: 'ilon_3', mes: [{ text: { __html: 'Добрый день. Я внучатый племянник его двоюродного брата.' }, count: 0 }] },
              { user: 'my', id: 'ilon_4', mes: [{ text: { __html: 'А сможете подтвердить документами?' }, count: 2 }, { text: { __html: 'А какие у вас доказательства подлинности кепки?' }, count: 4 }] },
              { user: 'he', id: 'ilon_5', mes: [{ text: { __html: '<img src="' + scan + '">Конечно могу! Вот скан моего паспорта, можете поискать в интернете — я его дальний родственник!' }, count: 0 }] },
              { user: 'my', id: 'ilon_6', mes: [{ text: { __html: 'Хорошо, убедили. Но все-таки, на такую вещь должны быть какие-то особенные документы, как на антиквариат?' }, count: 4 }] },
              { user: 'he', id: 'ilon_7', mes: [{ text: { __html: '<img src="' + gagarin + '">Ну как какие! Вот фото, где Юрий Леонидович позирует прямо в ней.' }, count: 0 }] },
              { user: 'my', id: 'ilon_8', mes: [{ text: { __html: 'Хорошо, убедили. Но все-таки, на такую вещь должны быть какие-то особенные документы, как на антиквариат?' }, count: 2 }] },
              { user: 'he', id: 'ilon_9', mes: [{ text: { __html: 'Да какие документы! Пока будешь их оформлять — разоришься. Давайте так, по-простому, просто почтой перешлю...' }, count: 0 }] },
              { user: 'my', id: 'ilon_10', mes: [{ text: { __html: 'Ну не могу же я верить вам на слово? Нужны какие-то подтверждающие подлинность бумаги.' }, count: 2 }, { text: { __html: 'Ладно, была не была. Хочу встретиться и взглянуть!' }, count: 2 }] },
              { user: 'avito', id: 'ilon_11', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'ilon_12', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 5 }] },
              { user: 'avito_end', id: 'ilon_13', mes: [{ text: { __html: '<div class="final-mess-no">Ни за что!</div>Антикварные вещи лучше покупать только с помощью профессиональных оценщиков, а иначе можно легко нарваться на подделку. Кепка Юрия Гагарина, которую кто-то пытается сбыть с рук без документов и как можно быстрее — верный повод насторожиться.' }, count: 2 }] },
              { user: 'final_end', id: 'ilon_14', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'ilon_15', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
              { user: 'avito_end', id: 'ilon_16', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>И правда! Антикварные вещи лучше покупать только с помощью профессиональных оценщиков, а иначе можно легко нарваться на подделку. Кепка Юрия Гагарина, которую кто-то пытается сбыть с рук без документов и как можно быстрее — верный повод насторожиться.' }, count: 2 }] },
              { user: 'final_end', id: 'ilon_17', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'ilon_18', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
            ],
          },
        ],
      },
      {
        hero: 'kianu',
        img: img_kianu,
        name: 'Киану Ривз',
        named: 'Киану Ривзу',
        result: false,
        push: [false, kianu_mess_buy_mob, false],
        data: [
          {
            name: 'kianu_sell',
            state: true,
            img: kianu_sell,
            img_big: kianu_sell_big,
            mob: kianu_sell_mob,
            mob_big: kianu_sell_mob_big,
            message: kianu_mess_sell,
            title: 'iPhone 8 б/у',
            subtitle: 'Продаю свой айфон. Пользовался им около года, но решил купить новый. В хорошем состоянии!<br>Только Москва.',
            price: '15 000 ₽',
            city: 'Москва',
            seller: 'Петя Дакотин',
            seller_img: kianu_seller,
            seller_text: 'Потенциальный покупатель',
            seller_status: 'Продать айфон не так просто, как кажется!',
            chat: [
              { user: 'he', id: 'kianu_1', mes: [{ text: { __html: 'Добрый день! Хочу купить Айфон. Он новый?' }, count: 0 }] },
              { user: 'my', id: 'kianu_2', mes: [{ text: { __html: 'Добрый день. Нет, я им пользовался' }, count: 3 }] },
              { user: 'he', id: 'kianu_3', mes: [{ text: { __html: 'Ну он в хорошем состоянии?' }, count: 1 }] },
              { user: 'my', id: 'kianu_4', mes: [{ text: { __html: 'В отличном!' }, count: 2 }, { text: { __html: 'В хорошем: никаких сколов и повреждений' }, count: 2 }] },
              { user: 'he', id: 'kianu_5', mes: [{ text: { __html: 'Мне подходит. Только вот... Я уже покупал айфон с рук, и не смог зайти в свою учетную запись iCloud. В итоге я остался с заблокированным айфоном. Вы можете прямо сейчас проверить, можно ли на вашем айфоне без проблем поменять учетку?' }, count: 0 }] },
              { user: 'my', id: 'kianu_6', mes: [{ text: { __html: 'Могу, а как это сделать?' }, count: 2 }, { text: { __html: 'Давайте сделаем это при встрече, я не умею' }, count: 2 }] },
              { user: 'he', id: 'kianu_7', mes: [{ text: { __html: 'Это легко: действуйте согласно этой инструкции (типа ссылка). А вот и мои данные: ferdishenko@icloud.com, пароль — ljcnjtdcrbqkj[. Как введете — напишите мне.' }, count: 0 }] },
              { user: 'my', id: 'kianu_8', mes: [{ text: { __html: 'Окей, сейчас' }, count: 2 }, { text: { __html: 'Вы не боитесь, что я украду ваши данные?' }, count: 2 }] },
              { user: 'avito', id: 'kianu_9', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'kianu_10', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 5 }] },
              { user: 'avito_end', id: 'kianu_11', mes: [{ text: { __html: '<div class="final-mess-no">Ни за что!</div>Это распространенная схема мошенничества: вы вводите чужие данные, через несколько минут устройство блокируется, а мошенник требует деньги за разблокировку. Никогда не вводите на своем устройстве Apple чужие данные iCloud. А если обман уже произошел, ни в коем случае не отправляйте деньги на счет мошенника, пожалуйтесь в техподдержку Avito и отнесите телефон в сервисный центр Apple.' }, count: 2 }] },
              { user: 'final_end', id: 'kianu_12', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'kianu_13', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
              { user: 'avito_end', id: 'kianu_14', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>И правда! Это распространенная схема мошенничества: вы вводите чужие данные, через несколько минут устройство блокируется, а мошенник требует деньги за разблокировку. Никогда не вводите на своем устройстве Apple чужие данные iCloud. А если обман уже произошел, ни в коем случае не отправляйте деньги на счет мошенника, пожалуйтесь в техподдержку Avito и отнесите телефон в сервисный центр Apple.' }, count: 2 }] },
              { user: 'final_end', id: 'kianu_15', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'kianu_16', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
            ],
          },
          {
            state: true,
            img: kianu_buy,
            img_big: kianu_buy_big,
            mob: kianu_buy_mob,
            mob_big: kianu_buy_mob_big,
            message: kianu_mess_buy,
            title: 'Лучшие орхидеи на любой вкус и цвет',
            subtitle: 'Имеются разные сорта в наличии: простые фаленопсисы и редкие селективные орхидеи! Возможна доставка ростков по всей России! Лучшее качество.',
            price: 'от 300 до 25 0000 ₽',
            city: 'Москва',
            seller: 'Нина Петровна',
            seller_img: kianu_seller_2,
            seller_text: 'Садовод флорист',
            seller_status: 'Купить орхидею для любимой',
            chat: [
              { user: 'my', id: 'kianu_1', mes: [{ text: { __html: 'Добрый день! Хочу купить у вас одну из ваших орхидей.' }, count: 3 }] },
              { user: 'he', id: 'kianu_3', mes: [{ text: { __html: 'Добрый! Уже выбрали, какую?' }, count: 0 }] },
              { user: 'my', id: 'kianu_4', mes: [{ text: { __html: 'Да, хотел бы купить Мониерара миллениум мэджик вичкрафт' }, count: 2 }, { text: { __html: 'Нет, может, посоветуете?' }, count: 4 }] },
              { user: 'he', id: 'kianu_5', mes: [{ text: { __html: 'Это очень редкая орхидея, ей нужны особенные условия. Справитесь?' }, count: 0 }] },
              { user: 'my', id: 'kianu_6', mes: [{ text: { __html: 'Моя девушка справится, у нее куча разных орхидей. Беру мэджик вичкрафт!' }, count: 4 }] },
              { user: 'he', id: 'kianu_7', mes: [{ text: { __html: 'Я продаю редкие орхидеи, им нужен особенный уход. Но могу предложить вам Орхидею дендробиум нобиле. Будете брать?' }, count: 0 }] },
              { user: 'my', id: 'kianu_8', mes: [{ text: { __html: 'Моя девушка справится, у нее куча разных орхидей. Беру мэджик вичкрафт!' }, count: 2 }] },
              { user: 'he', id: 'kianu_9', mes: [{ text: { __html: 'Отлично! Только она еще не зацвела, получится продать вам только росток этой орхидеи.' }, count: 0 }] },
              { user: 'my', id: 'kianu_10', mes: [{ text: { __html: 'А как я пойму, что это именно нужное мне растение?' }, count: 2 }, { text: { __html: 'Хорошо!' }, count: 2 }] },
              { user: 'avito', id: 'kianu_11', mes: [{ text: { __html: 'Этому покупателю можно доверять?' }, count: 2 }] },
              { user: 'final', id: 'kianu_12', mes: [{ text: { __html: 'Да, можно' }, count: 2 }, { text: { __html: 'Нет, что-то тут нечисто' }, count: 5 }] },
              { user: 'avito_end', id: 'kianu_13', mes: [{ text: { __html: '<div class="final-mess-no">Ты не прав!</div>Аккуратнее! Это распространенный случай мошенничества: за большие деньги покупателю продают росток обычного фаленопсиса или венериного башмачка. Об этом жертва, не являющаяся специалистом, узнает только тогда, когда цветок вырастает и начинает цвести. Чтобы избежать такого мошенничества, нужно покупать только цветущие растения или внимательно сравнивать росток с материнским растением. А еще лучше — проконсультироваться со знакомым специалистом при покупке. Конечно, Киану хочется сделать своей девушке сюрприз, но слишком уж велик риск быть обманутым!' }, count: 2 }] },
              { user: 'final_end', id: 'kianu_14', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'kianu_15', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
              { user: 'avito_end', id: 'kianu_16', mes: [{ text: { __html: '<div class="final-mess-yes">Ты прав!</div>И правда! Поддельные орхидеи — распространенный случай мошенничества: за большие деньги покупателю продают росток обычного фаленопсиса или венериного башмачка. Об этом жертва, не являющаяся специалистом, узнает только тогда, когда цветок вырастает и начинает цвести. Чтобы избежать такого мошенничества, нужно покупать только цветущие растения или внимательно сравнивать росток с материнским растением. А еще лучше — проконсультироваться со знакомым специалистом при покупке. Конечно, Киану хочется сделать своей девушке сюрприз, но слишком уж велик риск быть обманутым!' }, count: 2 }] },
              { user: 'final_end', id: 'kianu_17', mes: [{ text: { __html: 'Провернуть еще одну сделку' }, count: 2000 }] },
              { user: 'final_end', id: 'kianu_18', mes: [{ text: { __html: 'Узнать результат' }, count: 3000 }] },
            ],
          },
        ],
      },
    ]
  )

  const game = gameData.filter(el => el.hero === hero)

  const changeLevel = (level) => {
    setLevel(level)
    setOverlay(true);
  }

  const selectHero = (hero) => {
    setHero(hero)
    changeLevel('game')
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
    setRem(getRem)
  })

  const st = {
    fontSize: rem + 'px'
  }

  const chanheResult = (hero) => {
    setGameData(gameData.map((el) => {
      if (el.hero === hero) {
        el.result = true
      }
      return el
    }))
  }

  const onOverlayBlur = (blur) => {
    setOverlayBlur(blur)
  }

  let cls = ['App']
  if (mobile) {
    cls.push('amobile')
  }

  return (
    <Context.Provider value={{
      changeLevel, selectHero, setOverlay, onFinalSellBuy, chanheResult, onOverlayBlur
    }}>
      <div className={cls.join(' ')} style={st}>
        <Canvas level={level} overlayBlur={overlayBlur} game={game[0]} gameData={gameData} mobile={mobile} />
        {overlay ? (<Overlay />) : ('')}
        {overlayBlur === 'show' ? (<OverlayBlur overlayBlur={overlayBlur} mobile={mobile} game={game[0]} />) : ('')}
        <div className="upload-img">
          <img src={img_billy} alt="" />
          <img src={img_kianu} alt="" />
          <img src={img_ilon} alt="" />
          <img src={billy_sell} alt="" />
          <img src={ilon_sell} alt="" />
          <img src={kianu_sell} alt="" />
          <img src={billy_buy} alt="" />
          <img src={ilon_buy} alt="" />
          <img src={kianu_buy} alt="" />
          <img src={billy_sell_mob} alt="" />
          <img src={ilon_sell_mob} alt="" />
          <img src={kianu_sell_mob} alt="" />
          <img src={billy_buy_mob} alt="" />
          <img src={ilon_buy_mob} alt="" />
          <img src={kianu_buy_mob} alt="" />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
