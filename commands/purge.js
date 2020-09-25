const Discord = require("discord.js")
  
  module.exports = {
    name: 'purge',
    description: "Een purge commando!",
    execute(message, args){
        
      if(message.content.startsWith('?purge')){
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("je mag dit niet doen GRRRR");
 
    if (!args[0]) return message.reply("Geef aub een aantal op.");
 
    if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        message.channel.bulkDelete(aantal).then(() => { 
 
            if (args[0] == 0) {
 
                message.reply(`1 hz dat?`).then(msg => msg.delete({timeout: 3000}));
            
            } else if (args[0] == 1) {
            
                message.reply(`Ik heb 1 bericht verwijderd.`).then(msg => msg.delete({timeout: 3000}));
            
            } else {
            
                message.reply(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete({timeout: 3000}));
            
            }
 
        });
 
    } else {
        return message.reply("Geef een getal op.");
    }
}
    }
}