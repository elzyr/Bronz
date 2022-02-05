module.exports = {
    name: 'resume',
    aliases: [],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌Nic nie gra❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `ah shit, here we go again` : `${message.author} cos nie styka w resume ❌`);
    },
};