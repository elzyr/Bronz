const got = require('got');

module.exports = {
    name: 'smem',
    aliases: ['smeme', 'smemes'],
    cooldown: 5,
    description: "dej mema",
    execute(message, args, cmd, client, Discord){
        message.channel.send('oto twój mem');
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/surrealmemes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')

            message.channel.send(embed);
        })
    }
}