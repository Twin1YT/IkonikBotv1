module.exports = {
	name: 'randomimage',
	description: 'Ping!',
	execute(message, args) {
        const Discord=  require("discord.js")
        let attch = "https://picsum.photos/200/300.jpg"
        let attachment = new Discord.MessageAttachment(attch);
        message.channel.send(attachment);
	},
};