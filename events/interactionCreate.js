module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
          if (!queue || !queue.playing) return int.reply({ content: `nic nie gra teraz przeciez?. ❌`, ephemeral: true, components: [] });

            int.member.send(`**Zapisalem: \`${queue.current.title}\` ✅**`).then(() => {
                return int.reply({ content: `wyslalem ci na pv kasztaniarzu ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `masz wylaczone dmy albo blad z botem XD. ❌`, ephemeral: true, components: [] });
            });
        }
    }
};