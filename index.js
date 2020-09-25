const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '?';
const fs = require('fs');


client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Minato is online!');
    client.user.setActivity('', { type: 'WATCHING' })

});

 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Een help commando
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
     } 
    //Een avatar commando
    if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
     } 
         //Een ip commando
    if(command === 'ip'){
        client.commands.get('ip').execute(message, args);
     } 
         //Een ping commando
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    //Een botinfo commando
    if(command === 'botinfo'){
        client.commands.get('botinfo').execute(message, args);
    }
    
});

client.login(process.env.token);