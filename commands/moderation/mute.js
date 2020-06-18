const {
    MessageEmbed
} = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes someone",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
                "Sorry but you do not have permission to unmute anyone"
            );
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles.");
        }

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
        }
        var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if (!person) return message.reply("I couldn't find that person " + person)

        let role = message.guild.roles.cache.find(role => role.name === "Muted");


        if (!role) return message.reply("Couldn't find the mute role.")


        let time = args[1];
        if (!time) {
            return message.reply("You didnt specify a time!");
        }

        person.roles.add(role.id);


        message.channel.send(`${person.user.tag} has now been muted for ${ms(ms(time))}`)

        setTimeout(function () {

            person.roles.remove(role.id);
            message.channel.send(`${person.user.tag} has been unmuted.`)
        }, ms(time));
    }
}