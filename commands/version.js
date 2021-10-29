module.exports = {
    name: 'version',
    cooldown: 1,
    permissions: [],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('wersja 0.5.2 \n-Muzyka działa\n-Bot nie resetuje sie już kiedy nie rozumie komendy\n\n jesli znajdziesz jakis blad napisz do Elzyr#0001');
        console.log("ping command has been used");
    }
}