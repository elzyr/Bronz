module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, nic nie gra przeciez ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, ale nie mam czego usunac ziomek ❌`);

        await queue.clear();

        message.channel.send(`no i nie ma queue, po co to dodawales? 🗑️`);
    },
};