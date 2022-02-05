const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RANDOM');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('xd') ;
        embed.addField(`dostępne - ${commands.size} komendy:`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' \n '));

        embed.setTimestamp();
        embed.setFooter('Elzyr#0001', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};
