module.exports = {
    name: 'help',
    cooldown: 5,
    description: "wyświetla wszystkie komendy",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
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
            {name:'!leave', value:'wychodzi z kanału'}

        )
        .setFooter("Bot zrobiony przez Elzyr#5675");

        message.channel.send(newEmbed);
    }

}