module.exports = {
    name: "leave",
    category: "moderation",
    description: "Leave a server",
    run: async (client, message, args) => {
            if (message.author.id !== "673485740679757835") return message.channel.send(`${message.author.username}, only the bot owner has the permission to execute this command.`);
            let id = args[0];
            if (!id) id = message.guild.id;
            message.channel.send("My time has come.. goodbye")
            client.guilds.cache.get(id).leave()
              .then(g => console.log(`Left ${g}`))
    }
}