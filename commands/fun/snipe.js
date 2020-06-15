const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "snipe",
    description: "Get a message that was recently deleted",
    usage: "[snipe number]",
    category: "info",
    run: async(client, message, args) => {
        const snipes = client.snipes.get(message.channel.id) || [];
        const msg = snipes[args[0]-1||0]
        if(!msg) return message.channel.send(`There is nothing to snipe!`);
        const embed = new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, size: 256}))
        .setDescription(msg.content)
        .setFooter(`Deleted at: ${msg.date} o'clock | Snipe ${args[0]||1}/${snipes.length}`)
        if(msg.attachment) embed.setImage(msg.attachment)
        message.channel.send(embed)
    }
}