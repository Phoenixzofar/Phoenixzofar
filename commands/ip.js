const Discord = require("discord.js")
  
  module.exports = {
    name: 'ip',
    description: "Een serverip commando!",
    execute(message, args){
        
      if(message.content.startsWith('?ip')){
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;
    
        //het bericht
            const embed = new Discord.MessageEmbed()

  .setThumbnail("https://cdn.discordapp.com/attachments/625650016500842507/759090809835880508/Yin_Yang.png")

  .setTitle("Minecraft server ip")
  .addFields({ name: "ip:", value: "Momenteel is er geen ip!", inline: false })
  .addFields({ name: "versie:", value: "1.12.2", inline: true })


  message.channel.send(embed);

        }
    }
}

//  .addFields({ name: "", value: "", inline: false })