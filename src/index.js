const dotenv = require ('dotenv');
require('dotenv').config();

const {Telegraf} = require('telegraf');//https://telegraf.js.org/index.html
const { message } = require('telegraf/filters');
const {BOT_TOKEN} = process.env;
const i18next = require('i18next'); //https://www.i18next.com/overview/getting-started

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


bot.start((ctx)=>ctx.reply('Welcome!'))
bot.help((ctx)=>ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx)=>ctx.reply('👍'))
bot.hears((message), (ctx)=> ctx.reply('Hello,body!'));


bot.launch();