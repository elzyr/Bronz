module.exports = {
    name: 'op',
    cooldown: 1,
    aliases: ['opgg', 'gg'],
    permissions: [],
    description: "najprostrza komenda do przetestowania czy bot dziala",
    execute(message, args, cmd, client, Discord){
        var link = "https://eune.op.gg/summoner/userName=";

        if (!args.length) {
            return message.channel.send(`nie podałeś nicku ${message.author}! :monkey:`);
        }
        
        const nick = args.slice(0).join(' ').replace(/\s/g, '');

        message.channel.send(link + nick);

    }
}
