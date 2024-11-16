const dotenv = require ('dotenv');
require('dotenv').config();

const {Telegraf} = require('telegraf');//https://telegraf.js.org/index.html
const { message } = require('telegraf/filters');
const {BOT_TOKEN} = process.env;
const i18next = require('i18next'); //https://www.i18next.com/overview/getting-started
const axios = require ('axios'); //https://www.npmjs.com/package/axios  используется в getExchange.js
const getExchange = require('./helpers/getExchange');


const bot = new Telegraf(BOT_TOKEN);

i18next.init({
    lng: 'ru', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: {
          "key": "привет мир"
        }
      }
    }
});


getExchange().then(data => {
  bot.context.currency = data.map(i => i.CharCode); //CharCode это валюта в объектах(см в API_URL)
  // bot.context.currency = data.map(i => i.ccy); СМ getExchange.js, метод map() для формата ОБЪЕКТ не работает, поэтому в 
  // getExchange мы преобрвзовали объекты в массив объектов
});

bot.start((ctx)=>ctx.reply('Welcome!'))
bot.help((ctx)=>ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx)=>ctx.reply('👍'))
bot.hears((message), (ctx)=> ctx.reply('Hello,body!'));


bot.launch();