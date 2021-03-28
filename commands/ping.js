module.exports = {
    name: 'ping',
    cooldown: 1,
    permissions: ["ADMINISTRATOR",],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('przestań spamić :angry:');
        console.log("ping command has been used");
    }
}