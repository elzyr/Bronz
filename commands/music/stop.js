module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌Nie ma czego skipowac❌`);

        queue.destroy();

        message.channel.send(`no i po zabawie, niaura ✅`);
    },
};