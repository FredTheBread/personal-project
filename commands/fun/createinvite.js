const Discord = require("discord.js");

module.exports = {
    name: "createinvite",
    category: "fun",
    description: "Creates an invite for the server that you run the command in",
    run: async (client, message, args) => {
        let channel = message.channel;
        channel.createInvite({
            uniqe: true
        }).then(invite => {
            const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username + "'s invite")
                .setDescription("discord.gg/" + invite.code)
            message.channel.send(embed);
        })
    }
}