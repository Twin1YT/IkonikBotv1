module.exports = {
	name: 'help',
	description: 'Ping!',
	execute(message, args) {
        const Discord = require ('discord.js')
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1484b2')
        .setTitle('Help')
        .setDescription('$Private = Neonite Private Server Modified by Twin1\n$shop = Fortnite Item Shop\n$keychain = fortnite current keychain\n$help = this command!\n$meme this just spits random memes out lol\n$dogs get doggies!\n$facebookmeme\n$image\n$animals (note it might show as corrupted because it eather was a link or an video')
        message.channel.send(exampleEmbed);
	},
};