module.exports = {
    name: 'version',
    cooldown: 1,
    permissions: ["ADMINISTRATOR",],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('wersja 0.5 bot działa (chyba)');
        console.log("ping command has been used");
    }
}