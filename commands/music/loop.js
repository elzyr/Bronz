const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, nic nie gra przeciez ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, cos juz zapetliles **(${client.config.px})** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `stan loopa: **${queue.repeatMode === 0 ? 'wylaczony' : 'wlaczony'}**, queue bedzie zapetlone 🔁` : `${message.author}, kurwa nie dziala ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, najpierw wylacz loop queue **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `stan loopa: **${queue.repeatMode === 0 ? 'wylaczony' : 'wlaczony'}**, tera ta nutka powinna sie loopowac (jak chcesz cale queue to **${client.config.px}loop queue**) 🔂` : `${message.author}, blont ❌`);
};
    },
};