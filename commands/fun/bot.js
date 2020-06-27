module.exports = {
    name: "invite",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('Please specify a bot ID!')
        message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${args[0]}&scope=bot`)
    }
}