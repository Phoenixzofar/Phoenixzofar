const Discord = require("discord.js")
  
  module.exports = {
    name: 'botinfo',
    description: "Een botinfo commando!",
    execute(message, args){
        
      if(message.content.startsWith('?botinfo')){
            if(message.author.bot) return;
            if(message.channel.type === "dm") return;
    
        //het bericht
            const embed = new Discord.MessageEmbed()

  .setThumbnail("https://cdn.discordapp.com/attachments/625650016500842507/759090809835880508/Yin_Yang.png")

  .setTitle("Bot info")
  .addFields({ name: "UserID", value: "752808491541856306", inline: true })
  .addFields({ name: "Discord.js:", value: "v12.3.1", inline: true })
  .addFields({ name: "Node:", value: "v14.9.0", inline: true })
  .addFields({ name: "Platform:", value: "linux", inline: true })
  .addFields({ name: "Gemaakt door:", value: "Shisui#2678", inline: true })
  .addFields({ name: "Gemaakt op:", value: "6-9-2020", inline: false })


  message.channel.send(embed);

        }
    }
}

//  .addFields({ name: "", value: "", inline: false })