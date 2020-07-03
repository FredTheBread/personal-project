const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()

module.exports = {
    name: "embed",
    category: "fun",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const embed = {
            "title": "**All commands**",
            "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
            "url": "https://discordapp.com",
            "color": 13543559,
            "timestamp": "2020-07-03T06:38:09.560Z",
            "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "footer text"
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "image": {
                "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "author": {
                "name": "The Management",
                "url": "https://discordapp.com",
                "icon_url": "https://cdn.discordapp.com/avatars/709328387214147667/495842741d5bd6870494d6943bde9fb7.png"
            },
            "fields": [{
                    "name": "🤔",
                    "value": "some of these properties have certain limits..."
                },
                {
                    "name": "😱",
                    "value": "try exceeding some of them!"
                },
                {
                    "name": "🙄",
                    "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
                },
                {
                    "name": "<:thonkang:219069250692841473>",
                    "value": "these last two",
                    "inline": true
                },
                {
                    "name": "<:thonkang:219069250692841473>",
                    "value": "are inline fields",
                    "inline": true
                }
            ]
        };
        message.channel.send({
            embed
        });
    }
}