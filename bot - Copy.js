const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {

    if(message.content == 'help') {
            message.reply('Sorry for the inconvinience but the bot is still being made so the help menu is not availible');
    }
});

client.login('NjE5OTg5MTU5NzI5NDMwNTY5.XXWU6A.LEY6NPGaCQ8FE_OLVd5EYuDytyk')