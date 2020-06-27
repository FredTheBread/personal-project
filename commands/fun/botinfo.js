const Discord = require("discord.js");
const client = new Discord.Client()

module.exports = {
    name: "botinfo",
    category: "fun",
    description: "Returns bot info",
    run: async (client, message, args) => {
        let boticon = client.user.displayAvatarURL;
        let botembed = new Discord.MessageEmbed()
        .setDescription("Bot Information")
        .setColor("0ED4DA")
        .setThumbnail(boticon)
        .addField("Bot Name", client.user.username, true)
        .addField("Bot Creation Date", client.user.createdAt, true)
        .addField("Servers", client.guilds.cache.size, true)
        .addField("Members", client.users.cache.size, true)
        message.channel.send(botembed)
    }
}