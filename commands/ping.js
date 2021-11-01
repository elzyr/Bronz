module.exports = {
    name: 'ping',
    cooldown: 1,
    permissions: ["ADMINISTRATOR",],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send(`🏓 Ping wynosi ${Date.now() - message.createdTimestamp}ms.\n Ping API to ${Math.round(client.ws.ping)}ms`);
    }
}