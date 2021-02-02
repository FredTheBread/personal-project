const Discord = require("discord.js")

module.exports = {
    name: "editsnipe",
    category: "fun",
    description: 'Shows the last edited message.',
    run: async (client, message, args) => {

        let snip = client.editsnipe.get(message.channel.id)

        if (!snip) return message.channel.send("No edits were found.")

        let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Message Edited")
            .setAuthor(snip.user, snip.profilephoto)
            .setDescription(`**Message: **\`${snip.msg}\``)
            .setTimestamp(snip.date)
        if (snip.image) embed.setImage(snip.image)

        message.channel.send(embed)
    }
}