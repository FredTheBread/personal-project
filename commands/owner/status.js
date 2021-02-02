const db = require("quick.db")
const Discord = require("discord.js");

module.exports = {
    name: "status",
    category: "owner",
    description: "Change the bot statuts",
    usage: "status <here>",
    run: async (client, message, args) => {

        if (message.author.id != '673485740679757835' ) return message.channel.send('You don\'t have permission to use this command!')

        if(!args.length) {
            return message.channel.send("Please specify a status message!")
        }
        db.set(`status`, args.join(" "))
        await client.user.setActivity(args.join(' '))
        await message.channel.send("Updated the bot status!")
    }
    
}