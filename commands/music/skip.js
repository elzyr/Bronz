module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        const success = queue.skip();

        return message.channel.send(success ? `skipuje` : `${message.author} blad D: ❌`);
    },
};