module.exports = {
    name: "ping",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`Pong! ${client.ws.ping}ms`);
    }
}