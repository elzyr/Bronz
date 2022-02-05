const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

 
        if (!queue || !queue.playing) return message.channel.send(`❌Nic nie leci❌`);

        if (!queue.tracks[0]) return message.channel.send(`❌Nic nie ma w queue❌`);

        const embed = new MessageEmbed();
        const methods = ['🔁', '🔂'];

        embed.setColor('RANDOM');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setTitle(`QUEUE`);

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (dodane przez <@${track. requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `i **${songs - 5}** innych piosenek` : `Ilość piosenek w queue: **${songs}**`;

        embed.setDescription(`teraz leci: \`${queue.current.title}\`\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs }`);

        embed.setTimestamp();
        embed.setFooter('@Elzyr#0001', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};