module.exports = {
    name: 'back',
    aliases: [],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, nic nie gra przeciez ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, nie mam sie do czego cofnac :< ❌`);

        await queue.back();

        message.channel.send(`cofam czas ✅`);
    },
};