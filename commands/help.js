module.exports = {
    name: 'help',
    cooldown: 1,
    aliases: ['commands', 'komendy'],
    permissions: [],
    description: "wyświetla wszystkie komendy",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("Komendy")
        .setDescription('Takie komendy są w tym momencie')
        .addFields(

            {name:'!help', value:'Wyświetla wszystkie komendy'},
            {name:'!mem', value:'podaje na tace randomowego mema z reddita'},
            {name:'!smem', value:'surrealistic mamamia'},
            {name:'!op (nick)', value:'daje link do op.gg danej osoby (dziala tylko eune w tym momencie)'},
            {name:'!play', value:'puszcza muzyke'},
            {name:'!skip', value:'skipuje aktualna piosenke'},
            {name:'!volume', value:'zmienia glośność (trzeba być Grande Bronze)'}



        )
        .setFooter("Bot zrobiony przez Elzyr#0001");

        message.channel.send(newEmbed);
    }

}