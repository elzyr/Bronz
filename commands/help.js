module.exports = {
    name: 'help',
    description: "wyświetla wszystkie komendy",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("Komendy")
        .setDescription('Takie komendy są w tym momencie')
        .addFields(

            {name:'!help', value:'wyświetla to okienko'},
            {name:'!mem', value:'podaje na tace randomowego mema z reddita'},
            {name:'!smem', value:'surrealistic mamamia'},
            {name:'!op (nick)', value:'daje link do op.gg danej osoby (dziala tylko eune w tym momencie'},
            {name:'!ping', value:'sprawdza czy bot dziala'}

        )
        .addImage('https://1.bp.blogspot.com/-cwQgpDJB2EA/XVM-C-bf_MI/AAAAAAABXJk/OL8xVgYQwcsln6Xf5ZQdYjHhjRBrLetKwCLcBGAs/s1600/4284.jpg')
        .setFooter("jak bede umiał to dodam wiecej :)");

        message.channel.send(newEmbed);
    }

}