const Discord = require("discord.js")
  
  module.exports = {
    name: 'avatar',
    description: "Een avatar commando!",
    execute(message, args){
        
      if(message.content.startsWith('?avatar')){
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;
    
        
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
            message.channel.send(emb)
            
        }
        else{
            message.channel.send("Sorry deze gebruiker bestaat niet.")

        }
        }else{
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
            message.channel.send(emb)
        }
}
      }
    

    
  }