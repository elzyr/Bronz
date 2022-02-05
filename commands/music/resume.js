module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`${message.author} nic nie gra kasztaniarzu ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `**${queue.current.title}**, no i pyk znowu gra` : `${message.author} cos nie styka w resume ❌`);
    },
};