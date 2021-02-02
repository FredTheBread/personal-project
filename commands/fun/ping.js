/*module.exports = {
    name: "ping",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`Pong! ${client.ws.ping}ms`);
    }
}*/

const Discord = require("discord.js")


module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    timeout: 10000,
    run: async (bot, message, args) => {
        message.channel.send(`🏓 Pinging....`).then((msg) => {
            const _ = new Discord.MessageEmbed()
                .setTitle("Pong!")
                .setDescription(
                    `🏓 Pong!\nLatency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
                )
                .setColor("RANDOM");
            msg.edit(_);
            msg.edit("\u200B");
        });
    },
};