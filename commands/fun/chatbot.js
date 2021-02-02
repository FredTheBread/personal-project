const {
    prefix
} = "$";
const cleverbot = require("cleverbot-free");
const log = new Map();

module.exports = {
    name: "chatbot",
    description: "Chat with the bot. Note that the bot has no memory about what had been said before so don’t try to do Q&A with it.",
    aliases: ["ai"],

    run: async (bot, message, args) => {
        if (!args[0]) {
            return message.channel.send("What are we gonna talk about?" + ` Usage: \`${prefix}${this.name} ${this.usage}\``)
        }
        var passMessages = log.get(message.author.id);
        if (!passMessages) {
            log.set(message.author.id, []);
            passMessages = log.get(message.author.id);
        }
        cleverbot(args.join(" "), passMessages).then(response => {
            passMessages.push(args.join(" "));
            passMessages.push(response);
            log.set(message.author.id, passMessages);
            message.channel.send(response);
        });
    }
}