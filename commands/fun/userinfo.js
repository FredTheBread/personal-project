const Discord = require('discord.js');
const moment = require('moment')

module.exports = {
    name: "userinfo",
    category: "fun",
    description: "Shows you all of the information about a specified user",
    run: async (client, message, args) => {

        let user = message.mentions.users.first() || message.author;

        let userinfo = {};
        const flags = user.flags.toArray();
        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .filter((role) => role.name !== "muted" && role.name !== "@everyone")
            .map(r => r)
            .join(" ");

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
            .addField('Username: ', userinfo.name, true)
            .addField('Discriminator: ', userinfo.discrim, true)
            .addField('ID: ', userinfo.id, true)
            .addField('Status: ', userinfo.status, true)
            .addField("Registered: ", userinfo.registered, true)
            .addField('Joined: ', userinfo.joined, true)
            .addField('Roles: ', rolemap, true)
            .addField('Badges: ', `${flags.join(', ')}`, true)
        message.channel.send(embed)
        if(!flags) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(user.tag, userinfo.avatar)
            .setThumbnail(userinfo.avatar)
            .addField('Username: ', userinfo.name, true)
            .addField('Discriminator: ', userinfo.discrim, true)
            .addField('ID: ', userinfo.id, true)
            .addField('Status: ', userinfo.status, true)
            .addField("Registered: ", userinfo.registered, true)
            .addField('Joined: ', userinfo.joined, true)
            .addField('Roles: ', rolemap, true)
            .addField('Badges: ', `No Badges`, true)
            message.channel.send(embed)
        }
    }
}