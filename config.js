module.exports = {
        TOKEN: 'ODIxNjQxMTY1OTc1NTg0ODM5.YFGq9w.SO2hQA4lbCS0X8oCCSJfWbfl2lA', //your discord bot token
        px: '!',
        watching: 'your mom',

    opt: {
        DJ: {
            enabled: true, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'Bronz premium', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['volume'] //Please don't touch
        },
        maxVol: 100, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {quality: "highest",
        filter: "audioonly",
        highWaterMark: 1 << 25,
        dlChunkSize: 0,}
    }
};
