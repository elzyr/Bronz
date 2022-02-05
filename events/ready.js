module.exports = async (client) => {
    console.log(`${client.user.username} Login!`);
    channel = client.channels.cache.get('903398782673252382');
    channel.send('reset');

    client.user.setActivity(client.config.playing);
};