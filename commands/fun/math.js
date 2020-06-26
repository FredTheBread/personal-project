const math = require('mathjs')
const Discord = require('discord.js')

module.exports = {
    name: "math",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        if(!args[0]) return message.reply('Please input a calcualation.');
        let resp;
        try {
            resp = math.eval(args.join(' '));
        } catch (e) {
            return message.reply('Sorry, but please input a valid calculation')
        }
        const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setTitle('Math calculation')
        .addField('Input', `\`\`\`${args.join('')}\`\`\``)
        .addField('Output', `\`\`\`js${resp}\`\`\``)
        message.channel.send(embed)
    }
}