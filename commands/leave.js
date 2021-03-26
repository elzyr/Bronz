module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
 
        if(!message.member.voice.channel){ return message.channel.send("nie możesz mnie wywalić jak mnie nie ma");}
        await voiceChannel.leave();
        await message.channel.send('Adios :smiling_face_with_tear:')
 
    }
}
