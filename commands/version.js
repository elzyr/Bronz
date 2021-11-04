module.exports = {
    name: 'version',
    cooldown: 1,
    permissions: [],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send(`wersja 0.5.5 \n
        - Muzyka działa\n
        - Bot nie resetuje sie już kiedy nie rozumie komendy\n
        - Zmiana odpowiedzi bota, bo sam niekiedy nie rozumialem o co mu chodzi XDD\n
        - Mała zmiana wyświetlania queue /04.11.2021
        - W KONCU DZIALA QUEUE\n\n
        Ostatni Patch: 04.11.2021\n
        jesli znajdziesz jakis blad napisz do Elzyr#0001`);
        console.log("ping command has been used");
    }
}