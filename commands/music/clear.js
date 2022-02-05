module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        if (!queue.tracks[0]) return message.channel.send(`❌Nie ma co clearować❌`);

        await queue.clear();

        message.channel.send(`🗑️Wyczyszczone🗑️`);
    },
};