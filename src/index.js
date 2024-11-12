const dotenv = require ('dotenv');
require('dotenv').config();
const {Telegraf} = require('telegraf');
const {BOT_TOKEN} = process.env;


const bot = new Telegraf(BOT_TOKEN);

bot.launch();