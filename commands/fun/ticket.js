const Discord = require('discord.js')
module.exports = {
    name: 'ticket',
    run: (client, message, args) => {
        const user = message.author.id;
        const name = "ticket-" + user;
        if (message.guild.channels.cache.find(ch => ch.name == name)) {
            message.channel.send("You already have an opened ticket!")
        } else {
            message.guild.channels.create(name).then((chan) => {
                chan.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                })
                chan.updateOverwrite(user, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                })
                message.channel.send("I have created a ticket for you");
                chan.send("Please sit tight, support will arrive as soon as possible!").then((m) => {
                    m.pin()
                })
            })
        }
    }
}