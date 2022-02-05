module.exports = async (client) => {
    console.log(`${client.user.username} Login!`);
    channel = client.channels.cache.get('901933097950519338');
    channel.send('BOT SIE ZRESETOWAŁ');

    client.user.setActivity(client.config.playing);
};