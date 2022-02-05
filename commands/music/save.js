module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.channel.send(`${message.author} nic nie gra ❌`);

        message.author.send(`myk zapisuje **${queue.current.title}** | ${queue.current.author} ✅`) .then(() => {
            message.channel.send(`wyslalem ci w dmach ✅`);
        }).catch(error => {
            message.channel.send(`${message.author} nie moge ci wyslac D: ❌`);
        });
    },
};