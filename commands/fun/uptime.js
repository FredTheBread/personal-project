const Discord = require("discord.js")

module.exports = {
    name: "uptime",
    category: "info",
    description: "Returns how long the bot has been on for",
    run: async (client, message, args) => {
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes and  ${sec.padStart(2, '0')} seconds!`
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(`I have been online for: ${duration(client.uptime)}`)
        message.channel.send(embed)
    }
}