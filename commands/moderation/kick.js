const discord = require("discord.js");

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kick anyone with one shot xD",
    usage: "kick <@user> <reason>",
    run: (client, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
        }

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
        }

        let target = message.mentions.members.first();

        if (!target) {
            return message.channel.send(`**${message.author.username}**, Please mention the person who you want to kick`)
        }

        if(!target.kickable) {
            return message.channel.send("This user is not kickable!")
        }

        if (target.id === message.author.id) {
            return message.channel.send(`**${message.author.username}**, You can\'t kick yourself`)
        }
        let reason = args.slice(1).join(" ");
        if (!reason) {
            reason = "No reason provided.";
        }
        let embed = new discord.MessageEmbed()
        .setTitle("Action: Kick")
        .setDescription(`Kicked ${target} (${target.id})`)
        .setColor("#ff2050")
        .setFooter(`Kicked by ${message.author.username} for '` + reason + `'`);
        
        message.channel.send(embed)
        
        target.kick(args[1]);
    }
}