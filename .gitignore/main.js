const Discord = require ('discord.js');
const low = require ('lowdb');
const FileSync = require ('lowdb/adapters/FileSync');
const adapter = new FileSync ('database.json');
const db = low(adapter);

var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setPresence({game: {name: 'faire des biscuit pour jl'}})
    console.log("LePetitJacob est operationnel !");
})

db.defaults({})
    .write()

bot.login('NTMzNjA1NDM2Nzg0Mzc3ODY2.DxtecQ.D0a2zCqddyGcpGaP8j9RVFOop1w');

bot.on('message' , message => {

})
