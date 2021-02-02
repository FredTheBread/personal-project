const {
    fetchTranscript
} = require('reconlx');
const Discord = require('discord.js');

module.exports = {
    name: 'transcript',
    run: async (args, message) => {
        fetchTranscript(message, 99)
            .then(data => {
                const file = new Discord.MessageAttachment(data, 'transcript.html');
                message.channel.send(file)
        })
    }
}