module.exports = {
    name: 'progress',
    aliases: ["time"],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Livestream`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};