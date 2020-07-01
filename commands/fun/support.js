module.exports = {
    name: "support",
    category: "fun",
    description: "Returns help server",
    run: async (client, message, args) => {
        message.channel.send(`If you need help, here is our help server!\nhttps://discord.gg/2pzzqnP`)
    }
}