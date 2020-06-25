let Discord = require('discord.js');

module.exports = {
    name: "info",
    category: "fun",
    description: "Returns the number of servers and members the bot is watching",
    run: async (client, message, args) => {
        const user = message.author;
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Currently \nListening to ${client.guilds.cache.size} servers \nWatching ${client.users.cache.size} Users`)
        .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(embed)
    }
}