module.exports = {
    name: 'stfu',
    cooldown: 5,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('!play https://www.youtube.com/watch?v=YHm60KS0EMc');
        console.log("POGCHAMP");
    }
}