const { Discord } = require('discord.js');
module.exports = {
    name: "putin",
    category: "fun",
    description: "Thicc Putin",
    run: async (client, message, args) => {
        message.channel.send({files: ['./images/putin.mp4']})
    }
}