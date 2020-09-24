const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("In onderhoud!", { type: "PLAYING" });
 
});

        client.on('message', message => {
            if (message.content === '?help') {
                if(message.author.bot) return;
                  if(message.channel.type === "dm") return;
                  message.channel.send('**Dit is wat commands en veel plezier ermee!** \n ?avatar \n ?ip');

            }
            client.on('message', message => {
                if (message.content === '?avatar') {
                    if(message.author.bot) return;
                      if(message.channel.type === "dm") return;
                      message.reply(message.author.displayAvatarURL());
    
                }
      
            });

        });

        client.login(process.env.token);