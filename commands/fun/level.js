const db = require("quick.db")
const discord = require('discord.js')
const { getInfo } = require("../../handlers/xp.js")
module.exports = {
    name: "level",
    aliases: ["rank"],
    category: "info",
    description: "Get the level of author or mentioned",
    usage: "level <user>",
    run: (client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        if (user.id === client.user.id) { //IF BOT
            return message.channel.send("😉 I am on level 100")
        }
        if (user.bot) {
            return message.channel.send("Bots do not have levels!")
        }

        let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;

        const {
            level,
            remxp,
            levelxp
        } = getInfo(xp);
        if(xp === 0) return message.channel.send(`**${user.tag}** does not have any xp yet!`)
        
        let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("BLACK")
    .setThumbnail(user.avatarURL())
    .setDescription(`**LEVEL** - ${level}
    **XP** - ${remxp}/${levelxp}`)
    
    message.channel.send(embed)   
    }
}