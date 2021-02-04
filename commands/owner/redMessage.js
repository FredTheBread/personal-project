module.exports = {
    name: "redMessage",
    category: "fun",
    description: "This is not a command, this is used for a different command to work",
    run: async (client, message, args) => {
        message.channel.send('This is not a command, this is used for a different command to work.')
        const redMessage = (message, title, description = null) => {
            message.channel.send({
                embed: {
                    color: 15158332,
                    title: title,
                    description: description,
                    author: {
                        name: message.bot.user.username,
                        icon_url: message.bot.user.avatarURL({
                            format: 'png',
                            dynamic: true,
                            size: 1024
                        })
                    }
                }
            })

        }
    }
}