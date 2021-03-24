const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () =>{
    client.user.setPresence({
        status: "idle",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: "naprawiłem", 
            type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});



client.login('ODIxNjQxMTY1OTc1NTg0ODM5.YFGq9w.SO2hQA4lbCS0X8oCCSJfWbfl2lA');
