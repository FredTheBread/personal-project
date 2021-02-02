module.exports = {
    name: "restart",
    aliases: ["shutdown", "shut down"],
    description: "Restarts the bot",
    run: async(client, message, args) => {
        if(message.author.id !== "673485740679757835") {
            return message.channel.send("Only the bot owner can use this command!")
        }
        await message.reply("A shutdown will commence...")
        process.exit()
    }
}