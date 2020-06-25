module.exports = {
    name: "math",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('You did not specify a number!')
    }
}