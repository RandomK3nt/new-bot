const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {

    if(message.content == 'k-help') {
            message.reply('Sorry for the inconvinience but the bot is still being made so the help menu is not availible');
    }
});

client.login(process.evn.BOT_TOKEN);
