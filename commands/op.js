module.exports = {
    name: 'op',
    cooldown: 5,
    description: "najprostrza komenda do przetestowania czy bot dziala",
    execute(message, args, cmd, client, Discord){
        var link = "https://eune.op.gg/summoner/userName=";

        if (!args.length) {
            return message.channel.send(`nie podałeś nicku smh :monkey:, ${message.author}!`);
        }

        if(args[1]==undefined){
            args[1]= " ";
        }
        if(args[2]==undefined){
            args[2]= " ";
        }
        if(args[3]==undefined){
            args[3]= " ";
        }
        if(args[4]==undefined){
            args[4]= " ";
        }
        if(args[5]==undefined){
            args[5]= " ";
        }

        message.channel.send(link + args[0] + args[1] + args[2] + args[3] + args[4] + args[5]);

    }
}

module.exports = {
    name: 'op',
    description: "this is a ping command!",
    execute(message, args){
        var link = "https://eune.op.gg/summoner/userName=";

        if (!args.length) {
            return message.channel.send(`nie podałeś nicku smh :monkey:, ${message.author}!`);
        }

        if(args[1]==undefined){
            args[1]= " ";
        }
        if(args[2]==undefined){
            args[2]= " ";
        }
        if(args[3]==undefined){
            args[3]= " ";
        }
        if(args[4]==undefined){
            args[4]= " ";
        }
        if(args[5]==undefined){
            args[5]= " ";
        }

        message.channel.send(link + args[0] + args[1] + args[2] + args[3] + args[4] + args[5]);
    }
}