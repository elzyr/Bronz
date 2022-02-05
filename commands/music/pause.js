module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, nic nie leci :/ ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `mowie ci stop` : `${message.author}, blad w komendzie pause D: ❌`);
    },
};