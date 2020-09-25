const { Message } = require("discord.js");

module.exports = {
    name: 'help',
    description: "Een help commando!",
    execute(message, args){


        try{

            var text = "Wil je wat commands hier zijn ze en veel plezier ermee ;)"
            
            message.author.send(text);

            message.reply("Alle commands staan in dm!");


        }catch(error){
            message.reply("O jee er is iets fout gegaan.");
        }
        
    }
}