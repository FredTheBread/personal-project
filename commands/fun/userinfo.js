const Discord = require('discord.js');
const moment = require('moment')

module.exports = {
    name: "userinfo",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

        let user = message.mentions.users.first() || message.author;

        let userinfo = {};

        userinfo.avatar = user.displayAvatarURL()
        userinfo.name = user.username;
        userinfo.discrim = `#${user.discriminator}`;
        userinfo.id = user.id
        userinfo.status = user.presence.status;
        userinfo.registered = moment.utc(message.guild.members.cache.get(user.id).user.createdAt).format("dddd, MMMM do, YYYY");
        userinfo.joined = moment.utc(message.guild.members.cache.get.joinedAt).format("dddd, MMMM do, YYYY");

        const embed = new Discord.MessageEmbed()
            .setAuthor(user.tag, userinfo.avatar)
            .setThumbnail(userinfo.avatar)
            .addField(`Username`, userinfo.name, true)
            .addField(`Discriminator`, userinfo.discrim, true)
            .addField(`ID`, userinfo.id, true)
            .addField(`Status`, userinfo.status, true)
            .addField(`Registered`, userinfo.registered, true)
            .addField(`Joined`, userinfo.joined, true)
        message.channel.send(embed)
    }
}