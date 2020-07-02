module.exports = {
    name: "createchannel",
    aliases: ["channel", "create"],
    category: "moderation",
    description: "Creates a channel",
    run: async (client, message, args) => {
        try {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You not have permission")
            if (!args[1]) return message.reply('Please specify a channel type! (text, voice, category)')
            if (!args[0]) return message.reply('Please specify a channel name!')
    
            message.channel.send('I\'ve created the channel!').then(() => {
                message.guild.channels.create(args[1], {
                    type: args[0]
                }, []).catch((err) => {
                    message.channel.send('There was an error!')
                })
            })
        } catch (err) {
            message.channel.send('There was an error!\n' + err).catch()
        }
    }
}