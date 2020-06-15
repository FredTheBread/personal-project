const {
    MessageEmbed
} = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes someone",
    run: async (client, message, args) => {

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