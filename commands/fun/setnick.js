const Discord = require("discord.js");
module.exports = {
    name: "setnickname",
    aliases: ["setnick", "nick"],
    category: "info",
    description: "Changes the nickname of the person mentioned",
    run: async (client, message, args) => {
        // You can make a single array to detect the user permissions.
        if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "You can't use this command!"
                }
            })
        }

        let user = message.mentions.users.first(); // You can mention someone, not only just user.
        if (!user) return message.channel.send({
            embed: {
                color: "RED",
                description: "You need to mention the user!"
            }
        });

        let nick = args.slice(1).join(" ");
        if (!nick) return message.channel.send({
            embed: {
                color: "RED",
                description: "You need to input the nickname!"
            }
        });

        let member = message.guild.members.cache.get(user.id);

        await member.setNickname(nick).catch(err => message.channel.send({
            embed: {
                color: "RED",
                description: `Error: ${err}`
            }
        }));
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: `Successfully changed **${user.tag}** nickname to **${nick}**`
            }
        });
    }
}