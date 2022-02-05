const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`❌Cos juz zapetliles❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `stan loopa: **${queue.repeatMode === 0 ? 'wyłaczony' : 'właczony'}**, queue bedzie zapetlone 🔁` : `${message.author}, kurwa nie dziala ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, najpierw wylacz loop queue **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `stan loopa: **${queue.repeatMode === 0 ? 'wyłaczony' : 'właczony'}**, tera ta nutka powinna sie loopowac (jak chcesz cale queue to **${client.config.px}loop queue**) 🔂` : `${message.author}, blont ❌`);
};
    },
};