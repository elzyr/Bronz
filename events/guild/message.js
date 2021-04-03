require('dotenv').config();
//create cooldowns map
const cooldowns = new Map();
module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    
    const cmd = args.shift().toLowerCase();
    
    if(!cmd ){
      return message.channel.send('błąd');
    }

    const command =
      client.commands.get(cmd.toLowerCase()) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

                    const validPermissions = [
                      "CREATE_INSTANT_INVITE",
                      "KICK_MEMBERS",
                      "BAN_MEMBERS",
                      "ADMINISTRATOR",
                      "MANAGE_CHANNELS",
                      "MANAGE_GUILD",
                      "ADD_REACTIONS",
                      "VIEW_AUDIT_LOG",
                      "PRIORITY_SPEAKER",
                      "STREAM",
                      "VIEW_CHANNEL",
                      "SEND_MESSAGES",
                      "SEND_TTS_MESSAGES",
                      "MANAGE_MESSAGES",
                      "EMBED_LINKS",
                      "ATTACH_FILES",
                      "READ_MESSAGE_HISTORY",
                      "MENTION_EVERYONE",
                      "USE_EXTERNAL_EMOJIS",
                      "VIEW_GUILD_INSIGHTS",
                      "CONNECT",
                      "SPEAK",
                      "MUTE_MEMBERS",
                      "DEAFEN_MEMBERS",
                      "MOVE_MEMBERS",
                      "USE_VAD",
                      "CHANGE_NICKNAME",
                      "MANAGE_NICKNAMES",
                      "MANAGE_ROLES",
                      "MANAGE_WEBHOOKS",
                      "MANAGE_EMOJIS",
                    ]
                  
                    if(command.permissions.length){
                      let invalidPerms = []
                      for(const perm of command.permissions){
                        if(!validPermissions.includes(perm)){
                          return console.log(`brak permisji ${perm}`);
                        }
                        if(!message.member.hasPermission(perm)){
                          invalidPerms.push(perm);
                        }
                      }
                      if (invalidPerms.length){
                        return message.channel.send(`błąd \`${invalidPerms}\``);
                      }
                    }


    //If cooldowns map doesn't have a command.name key then create one.
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`poczekaj ${time_left.toFixed(1)} przed użyciem ${command.name}`);
        }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try{
        command.execute(message,args, cmd, client, Discord);
    } catch (err){
        message.reply("błąd");
        console.log(err);
    }

}
