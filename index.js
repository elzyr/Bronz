const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () =>{
    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: "DODAŁEM QUEUE POGCHAMP", 
            type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});



client.login(process.env.DISCORD_TOKEN);
