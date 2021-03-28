module.exports = {
    name: 'build',
    cooldown: 5,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        if(!args[0]) return message.channel.send('nie podałeś dla kogo builda potrzebujesz! aktualnie jest build do: ');
        
        else if(args[0] === 'lux') return message.channel.send(
            Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("Komendy")
        .setDescription('Takie komendy są w tym momencie')
        .addFields(

            {name:'!help', value:'wyświetla to okienko'},
            {name:'!mem', value:'podaje na tace randomowego mema z reddita'},
            {name:'!smem', value:'surrealistic mamamia'},
            {name:'!op (nick)', value:'daje link do op.gg danej osoby (dziala tylko eune w tym momencie)'},
            {name:'!ping', value:'sprawdza czy bot dziala'},
            {name:'!play', value:'puszcza muzyke (testuje dopiero)'},
            {name:'!stop', value:'wychodzi z kanału'},
            {name:'!skip', value:'skipuje aktualna piosenke'},
            {name:'!volume', value:'zmienia glośność'}



        )
        );
    }
}