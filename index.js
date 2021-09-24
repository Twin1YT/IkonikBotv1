const fs = require('fs');

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready for using!');
    
    
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
   
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
	if (message.content === `${prefix}ping`) {
        client.commands.get('ping').execute(message, args);
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }


    command(client, ['cc', 'clearchannel'], message => {
       if (message.member.hasPermission('ADMINISTRATOR')) {
           message.channel.message,fetch().then((results) => {
            console.log (results)
           })
            
       }
    })
});

client.login(token);
