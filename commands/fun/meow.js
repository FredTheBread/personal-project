const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "meow",
    category: "info",
    description: "look at these cats!",
    run: async (client, message, args) => {
        let rUser = message.mentions.members.first();

        const {
            body
        } = await superagent
            .get("https://nekos.life/api/v2/img/meow");
        const ghembed = new Discord.MessageEmbed()
            .setColor(0xa88e79)
            .setDescription(`**Cat Pictures**`)
            .setImage(body.url)
            .setFooter(`meow`)
        message.channel.send({
            embed: ghembed
        });
    }
}