module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        message.author.send(`**${queue.current.title}** od ${queue.current.author} `) .then(() => {
            message.channel.send(`wyslalem ci w dm ✅`);
        }).catch(error => {
            message.channel.send(`${message.author} nie moge ci wyslac D: ❌`);
        });
    },
};