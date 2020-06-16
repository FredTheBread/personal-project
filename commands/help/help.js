const Discord = require("discord.js")
const {
    Command
} = require('discord.js-commando');


module.exports = {
    name: 'help',
    category: "info",
    description: "Get commands help",
    run: async (client, message, args) => {

        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed.setThumbnail(message.client.user.avatarURL());
            embed.setTitle("Management Bot Help")
            embed.setDescription("All commands for Management Bot")
            embed.addField("❯ Owner", "`eval`, `blacklist`, `unblacklist`, `status`")
            embed.addField("❯ Mod", "`ban`,`clear`,`kick`, `leave`, `mute`, `warn`, `warnings`, `reset warns`, `set welcome`, `set leave`, `unmute`")
            embed.addField("❯ Fun", "`anime`, `corona`, `hug`, `imdb`, `instagram`, `kiss`, `rank`, `meow`, `pat`, `ping`, `poke`, `pokemon`, `scrap`, `send`, `nickname`, `snipe`, `spotify`, `weather`, `help`")
            embed.addField("❯ Help", "`suggest`, `help`, `giveaway`")
            embed.setFooter('Made by FredTheBread\nUsage: $giveaway <time> <channel> <prize>', `${message.client.user.avatarURL()}`);
            embed.setColor("#00ff00")

            message.channel.send(embed);
        }
        if (args[0] === 'Mod') {
            const embed3 = new Discord.MessageEmbed()
            embed3.setTitle("Mod commands for Mnagement Bot")
            embed3.setDescription("You need server permissions to use these")
            embed3.addField("`ban`", "Bans a specified person")
            embed3.addField("`clear`", "Clears a certain number of messages")
            embed3.addField("`kick`", "Kicks a specified person")
            embed3.addField("`leave`", "The bot leaves the current server")
        }
        if (args[0] === 'Owner') {
            const embed2 = new Discord.MessageEmbed()
            embed2.setTitle("Owner commands for Management Bot")
            embed2.setDescription("You need to be a bot owner for these")
            embed2.addField("`eval`", "Evaluate a piece of code")
            embed2.addField("`blacklist`", "Blacklist a user from using the bot")
            embed2.addField("`unblacklist`", "Unblacklist a user from the bot")
            embed2.addField("`status`", "Change the Status of the bot")
            embed2.addField("`leave`", "Makes the bot leave the server")
            embed2.setFooter('DM FredTheBread#6932 if you would like to be an owner of the bot', `${message.client.user.avatarURL()}`);
            embed2.setColor("#00ff00")
            message.channel.send(embed2);
        }

        if (args[0] === 'owner') {
            const embed2 = new Discord.MessageEmbed()
            embed2.setTitle("Owner commands for Management Bot")
            embed2.setDescription("You need to be a bot owner for these")
            embed2.addField("eval", "Evaluate a piece of code")
            embed2.addField("blacklist", "Blacklist a user from using the bot")
            embed2.addField("unblacklist", "Unblacklist a user from the bot")
            embed2.addField("status", "Change the Status of the bot")
            embed2.addField("`leave`", "Makes the bot leave the server")
            embed2.setFooter('DM FredTheBread#6932 if you would like to be an owner of the bot\nUsage: $eval command, $status *something*', `${message.client.user.avatarURL()}`);
            embed2.setColor("#00ff00")
            message.channel.send(embed2);
        }

    }
};