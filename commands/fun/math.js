const calculator = require('../../functions')

module.exports = {
    name: "math",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('You did not specify the first number!')
        if (!args[1]) return message.channel.send('You did not specify the calculation!')
        if (!args[2]) return message.channel.send('You did not specify the second number!')
        message.channel.send(calculator(args[0], args[1], args[2]))

    }
}