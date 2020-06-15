const {
    MessageEmbed
} = require('discord.js')
const ms = require('ms');

module.exports = {
    name: 'giveaway',
    aliases: ["gaw"],
    description: "Create a giveaway",
    usage: '<time> <channel> <prize>',
    category: "info",
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send(`Please sepcify how long you want the giveaway to be!`)
        if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("w")) return message.channel.send("You didn't use the correct formatting! (d, h, w)")
        if (isNaN(args[0][0])) return message.channel.send("Please only use whole numbers!")
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send("Please sepcify what channel you want the giveaway to be in!")
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`You didn't specify a prize!`)
        message.channel.send(`**Giveaway created in ${channel}!**`)
        let Embed = new MessageEmbed()
        .setTitle(`New giveaway`)
        .setDescription(`The user ${message.author} is hosting a giveaway with the prize of **${prize}**`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`#0000FF`)
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.size == 0) return message.channel.send('Nobody reacted! Gievaway is cancelled :(')
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u => !u.bot).random()
            channel.send(`The winner of the giveaway for **${prize}** is.......\n\n\n${winner}! 🥳🥳🥳`)

        }, ms(args[0]));
    }

}