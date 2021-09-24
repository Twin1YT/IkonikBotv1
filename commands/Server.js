module.exports = {
	name: 'server',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send(`This server's name is: ${message.guild.name}`);
	},
};