module.exports = {
    name: 'back',
    aliases: [],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`❌Nie mam sie do czego cofnac❌`);

        await queue.back();

        message.channel.send(`✅Cofam czas✅`);
    },
};