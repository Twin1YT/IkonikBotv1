const Discord = require ('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	},
};