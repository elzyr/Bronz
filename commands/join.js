module.exports = {
    name: 'join',
    cooldown: 1,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.member.voice.channel.join();
    }
}