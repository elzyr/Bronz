module.exports = {
    name: 'version',
    cooldown: 1,
    permissions: [],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send(`wersja ` + process.env.VERSION + ` \n
        - Muzyka działa
        - Bot nie resetuje sie już kiedy nie rozumie komendy
        - Zmiana odpowiedzi bota, bo sam niekiedy nie rozumialem o co mu chodzi XDD
        - Mała zmiana wyświetlania queue /04.11.2021
        - W KONCU DZIALA QUEUE
        - Zmiana wyświetlania wersji /26.11.2021
        - Dodanie komendy !now /04.12.2021

        Ostatni Patch: 04.12.2021
        jesli znajdziesz jakis blad napisz do Elzyr#0001

        znane błędy
        - Jeśli bot się zepsuje (czasami są bugi z muzyką) to musze go manualnie zrestartować na hostingu`);
        console.log("ping command has been used");
    }
}