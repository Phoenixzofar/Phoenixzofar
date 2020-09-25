const Discord = require("discord.js")
  
  module.exports = {
    name: 'ping',
    description: "Een ping commando!",
    execute(message, args){
        
      if(message.content.startsWith('?ping')){
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;

            message.channel.send('Ping: ' + `${Date.now() - message.createdTimestamp}` + ' ms');
      }
    }
}