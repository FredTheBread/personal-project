const db = require('quick.db')

module.exports = {
    name: "resetwarns",
    aliases: ["reset", "rwarns", "reset-warns"],
    usage: "resetwarns <@user>",
    description: "reset somebody's warnings",
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.channel.send("You need to have admin permissions to do this!")
        }
        if(!user) {
            return message.channel.send("Please mention a user!")
        }
        if(message.mentions.users.first().bot) {
            return message.channel.send("Bots don\'t have warnings")
        }
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === null) {
            return message.channel.send(`${message.mentions.users.first().username} doesn't have any warnings!`)
        }
        db.delete(`warnings_${message.guild.id}_${user.id}`)
        user.send(`Your warnings have been cleared by ${message.author.username} in **${message.guild.name}**`)
        await message.channel.send(`${message.mentions.users.first().username}'s warnings have been reset!`)
    }

}