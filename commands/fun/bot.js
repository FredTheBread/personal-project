module.exports = {
    name: "invite",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if (!args[1]) return message.channel.send('Please specify a bot ID!')
        if(args[1]) return message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${args[1]}&scope=bot`)
    }
}