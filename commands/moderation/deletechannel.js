module.exports = {
    name: "deletechannel",
    aliases: ["delete"],
    category: "moderation",
    description: "Deletes a channel",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You not have permission")
        message.channel.send("Goodbye").then; {
            message.channel.delete(args[0])
        }
    },
}