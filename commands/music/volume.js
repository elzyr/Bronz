const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`❌Nic nie gra❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`glosnosc tera wynosi **${queue.volume}** 🔊 (podglasnilem bo wam kurwy nie pasowalo)\njak chcesz zmienic to max to \`${maxVol}\``);

        if (queue.volume === vol) return message.channel.send(`${message.author} no i co kombinujesz, nudzi ci sie?`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}nawet nie wiem jak to skomentowac❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `glosnosc: **${vol}**/**${maxVol}%** 🔊` : `${message.author}blad D: ❌`) ;
    },
};