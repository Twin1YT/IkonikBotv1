
module.exports = {
	name: 'ban',
	description: 'Ping!',
	execute(message, args) {
		const { member, mentions} = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('ADMINISTRATOR') || 
        member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
             const targetMember = message.guild.members.cache.get(target.id)
             targetMember.ban()
             message.channel.send(`${tag} That user has been banned`)
          } else {
              message.channel.send(`${tag} please specify someone to ban!`)
          }
        } else {
            message.channel.send(
                `${tag} you do not have the permission to use this command.`
                )
        }

        
	},
};