const { Player } = require('discord-player');
const { Client, Intents, Collection } = require('discord.js');
const { readdirSync } = require('fs');

let client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');
client.player = new Player(client, client.config.opt.discordPlayer);
client.commands = new Collection();
const player = client.player

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    console.log(`-> Loaded event ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
};
console.log(`-> Loaded commands...`);
readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`${command.name.toLowerCase()} Load Command!`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    };
});

player.on('error', (queue, error) => {
    console.log(`Błąd z queue => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`błąd z łączeniem => ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`dodałem **${track.title}** do playlisty ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('ktos mnie wyjebał :< ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('nikogo nie ma, kurwa niaura ❌');
});

player.on('queueEnd', (queue) => {
});



if(client.config.TOKEN){
client.login(client.config.TOKEN).catch(e => {
})
}
