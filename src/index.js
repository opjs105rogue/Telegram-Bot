const dotenv = require ('dotenv');
require('dotenv').config();
const {Telegraf} = require('telegraf');
const { message } = require('telegraf/filters');
const {BOT_TOKEN} = process.env;


const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx)=>ctx.reply('Welcome!'))
bot.help((ctx)=>ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx)=>ctx.reply('👍'))
bot.hears((message), (ctx)=> ctx.reply('Hello,body!'));


bot.launch();