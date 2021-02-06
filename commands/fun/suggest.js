const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "suggest",
    category: "main",
    usage: "<message>",
    description: "suggest anything you wanted to",
    run: async (bot, message, args) => {
        let suggestion = args.join(" ");
        if (!suggestion)
            return message.channel.send(`Please provide a suggestion!`)
        let sChannel = message.guild.channels.cache.find(x => x.name === "suggestions");
        if (!sChannel) return message.channel.send("You don't have channel with the name `suggestions`")
        message.channel.send("Your suggestion has been filled to the staff team. Thank you!")
        let suggestembed = new MessageEmbed()
            .setFooter(bot.user.username, bot.user.displayAvatarURL)
            .setTimestamp()
            .addField(`New Suggestion from:`, `**${message.author.tag}**`)
            .addField(`Suggestion:`, `${suggestion}\n**Its your choice!**`)
            .setColor('#ff2052');
        sChannel.send(suggestembed).then(async msg => {
            await msg.react("✅");
            await msg.react("❌");
        });
    }
};