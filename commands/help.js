const { Message } = require("discord.js");

module.exports = {
    name: 'help',
    description: "Een help commando!",
    execute(message, args){
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        try{

            var text = "Wil je wat commands hier zijn ze en veel plezier ermee ;) \n\n ?avatar \n ?ping \n ?ip \n ?botinfo!"
            
            message.author.send(text);

            message.reply("Alle commands staan in dm!");


        }catch(error){
            message.reply("O jee er is iets fout gegaan.");
        }
        
    }
}