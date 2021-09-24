module.exports = {
	name: 'keychain',
	description: 'Ping!',
	execute(message, args) {
        const Discord=  require("discord.js")
        let attch = "https://api.nitestats.com/v1/epic/keychain.json"
        let attachment = new Discord.MessageAttachment(attch);
        message.channel.send(attachment);
	},
};