module.exports = {
    name: 'version',
    cooldown: 1,
    permissions: [],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send(`wersja ` + process.env.VERSION + ` \n
        - Muzyka działa\n
        - Bot nie resetuje sie już kiedy nie rozumie komendy\n
        - Zmiana odpowiedzi bota, bo sam niekiedy nie rozumialem o co mu chodzi XDD\n
        - Mała zmiana wyświetlania queue /04.11.2021\n
        - W KONCU DZIALA QUEUE\n
        - Zmiana wyświetlania wersji /26.11.2021\n\n
        Ostatni Patch: 04.11.2021\n
        jesli znajdziesz jakis blad napisz do Elzyr#0001\n\n
        znane błędy \n
        - Jeśli bot się zepsuje (czasami są bugi z muzyką) to musze go manualnie zrestartować na hostingu /26.11.2021\n
        - Zerowa kompatybilność z wieloma serwerami gulp /26.11.2021`);
        console.log("ping command has been used");
    }
}