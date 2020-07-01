const Discord = require("discord.js")
const ms = require('ms')
module.exports = {
    name: "uptime",
    category: "info",
    description: "Returns how long the bot has been on for",
    run: async (client, message, args) => {
        message.channel.send(`My uptime is \`${ms(client.uptime, { long: true })}\``);
    }
}