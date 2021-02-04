const Discord = require("discord.js");

module.exports = {
    name: "createinvite",
    category: "fun",
    description: "Creates an invite for the server that you run the command in",
    run: async (client, message, args) => {
        let channel = message.channel;
        let invite = await message.channel.createInvite({
            maxAge: 0,
            maxUses: 0
        }).catch(console.error);
        const embed = new Discord.MessageEmbed()
            .setTitle(message.author.username + "'s invite")
            .setDescription("discord.gg/" + invite)
        message.channel.send(embed);
    }
}