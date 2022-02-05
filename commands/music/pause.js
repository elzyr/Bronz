module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Pauzuje` : `blad w komendzie pause D: ❌`);
    },
};