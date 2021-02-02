const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: "firstmessage",
    description: "Shows the first message that the specified person sent in that server",
    run: async (bot, msg, args) => {
        if (
            msg.channel.type === 'text' &&
            !msg.channel.permissionsFor(bot.user).has('READ_MESSAGE_HISTORY')
        ) {
            return msg.reply(
                `Sorry, I don't have permission to read ${msg.channel}...`
            )
        }
        const messages = await msg.channel.messages.fetch({
            after: 1,
            limit: 1
        })
        const message = messages.first()
        if (message.content) {
            const embed = new MessageEmbed()
                .setColor(message.member ? message.member.displayHexColor : 0x00ae86)
                .setThumbnail(
                    message.author.displayAvatarURL({
                        format: 'png',
                        dynamic: true
                    })
                )
                .setTitle(`First Message`)
                .setURL(message.url)
                .setThumbnail(message.author.displayAvatarURL({
                    format: 'png',
                    dynamic: true
                }))
                .setDescription(`**Message:** ${message.content}`)
                .addField('CreatedBy', `**${message.author}**`, true)
                .addField(`MessageID`, `${message.id}`, true)
                .addField('CreatedAt', (message.createdAt), true)
                .setFooter(`Requested by: ${message.member.displayName}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setTimestamp()
            return msg.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .setColor(message.member ? message.member.displayHexColor : 0x00ae86)
                .setThumbnail(
                    message.author.displayAvatarURL({
                        format: 'png',
                        dynamic: true
                    })
                )
                .setTitle(`First Message`)
                .setURL(message.url)
                .setThumbnail(message.author.displayAvatarURL({
                    format: 'png',
                    dynamic: true
                }))
                .setDescription(`**The message could not be found, maybe the channel was nuked or the message was deleted**`)
                .addField('CreatedBy', `**${message.author}**`, true)
                .addField(`MessageID`, `${message.id}`, true)
                .addField('CreatedAt', (message.createdAt), true)
                .setFooter(`Requested by: ${message.member.displayName}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setTimestamp()
            return message.channel.send(embed)
        }
    }
}