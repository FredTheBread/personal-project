const {
    Client,
    Message
} = require("discord.js");

module.exports = {
    name: "position",
    aliases: ["join", "joinposition"],
    run: async (client, message, args) => {

        const member = message.mentions.members.first();

        if (!member) return message.reply("Please specify a member!");

        const members = message.guild.members.cache
            .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
            .array();

        const position = new Promise((ful) => {
            for (let i = 1; i < members.length + 1; i++) {
                if (members[i - 1].id === member.id) ful(i);
            }
        });
        if(position == 1) {
            message.channel.send(`${member} is the 1st member to join the server!`)
        } else if (position == 2) {
            message.channel.send(`${member} is the second member to join the server!`)
        } else if (position == 3) {
            message.channel.send(`${member} is the third member to join the server!`)
        } else if (position == 4) {
            message.channel.send(`${member} is the fourth member to join the server!`)
        }
        message.channel.send(
            `${member} is the ${await position} member to join the server!`
        );
    },
};