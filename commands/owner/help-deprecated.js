const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { mode } = require('mathjs');

module.exports = {
    name: "help-deprecated",
    description: "The help command, what do you expect?",
    async run(client, message, args) {
        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation commands')
            .addField('`kick <@user>`', 'Kicks a member from your server via mention or ID', true)
            .addField('`ban <@user>`', 'Bans a member from your server via mention or ID', true)
            .addField('`clear <number>`', 'Purges a certain number of messages', true)
            .addField('`channelinfo <#channel>`', 'Sends an embed with the specified channel information', true)
            .addField('`createchannel <category> <name>`', 'Lets you create a channel', true)
            .addField('`infinite-mute <@user>`', 'Let\'s you mute someone infinitely', true)
            .addField('`mute <@user> <time>`', 'Let\'s you mute someone for a certain amount of time', true)
            .addField('`unmute <@user>`', 'Let\'s you unmute a person that is muted', true)
            .addField('`report <@user>`', 'Allows you to report someone as long as there is a channel called `reports`', true)
            .addField('`warn <@user>`', 'Allows you to warn a user if they are misbehaving', true)
            .addField('`warnings [@user]`', 'Let\'s you check how many warnings a user has', true)
            .addField('`reset-warns [@user]`', 'Allows you to reset someone\'s warnings', true)
            .addField('`setwelcome <#channel>`', 'Sets a welcome channel and will send welcome messages', true)
            .addField('`setleave`', 'Sets the leave channel and will send goodbye messages', true)
            .addField('`slowmode <#channel> <time>`', 'Sets a specified time as slowmode in the specified channel', true)
            .addField('`unban <id>`', 'Unbans a user from the server if they are banned', true)
            .setDescription('<> stands for required, [] stands for choice')
            .setTimestamp()
        const fun = new Discord.MessageEmbed()
            .setTitle('Fun commands page 1')
            .addField('`8ball <question>`', 'Lets you use an 8ball to see into your future', true)
            .addField('`anime <anime name>`', 'Looks up the specified anime show', true)
            .addField('`ascii <text>`', 'Converts text into ascii', true)
            .addField('`avatar [user]`', 'Allows you to look at your or someone else\'s profile picture', true)
            .addField('`botinfo`', 'Gives you information about `Management`', true)
            .addField('`dog`', 'Sends a cute image of a dog', true)
            .addField('`corona [country]`', 'Lets you see the # of infected, dead, etc from covid-19 of a country or of the world', true)
            .addField('`giveaway <channel> <winners> <time> <prize>`', 'Lets you start a giveaway if you have the required permissions', true)
            .addField('`reroll <message id of the giveaway>`', 'Rerolls the giveaway that was made', true)
            .addField('`google <search term>`', 'Lets you google something', true)
            .addField('`help`', 'Lets you see all available commands :)', true)
            .addField('`hug [@user]`', 'Lets you hug someone or lets you ask for a hug', true)
            .addField('`imdb <movie>`', 'Lets you look up a movie on imdb', true)
            .addField('`info`', 'Lets you see how many servers `Management` is in!', true)
            .addField('`instagram`', 'Lets you look at someone\'s instagram page stats', true)
            .addField('`invite`', 'Gives you a link to invite `Management` to your server', true)
            .addField('`kiss`', 'Lets you kiss someone ;)', true)
            .addField('`level`', 'Lets you check your level', true)
            .setDescription('<> stands for required, [] stands for choice', true)
            .setTimestamp()
        const fun2 = new Discord.MessageEmbed()
            .setTitle('Fun commands page 2')
            .addField('`math <math operation>`', 'Does your math homework')
            .addField('`meme`', 'Sends a meme from a subreddit')
            .addField('`meow`', 'Sends a cute image of a cat')
            .addField('`minecraft <minecraft username>`', 'Sends a users minecraft skin')
            .addField('`pat [@user]`', 'Pat someone or ask to be patted')
            .addField('`poke [@user]`', 'Poke someone or ask to be poked')
            .addField('`pokemon <pokemom name>`', 'Sends information about the specified pokemon')
            .addField('`poll <#channel> <question>`', 'Starts a poll in the specified channel if the user has administrative permissions')
            .addField('`putin`', 'You will have to find out for yourself')
            .addField('`scrap <anime name>`', 'Gets any available links to watch the specified anime')
            .addField('`send <@user>`', 'Sends a user a specified message, but only works with Administrative permissions', true)
            .addField('`setnick [@user]`', 'Allows you to change your nickname or someone else\'s nickname if you have permission to do so', true)
            .addField('`snipe`', 'Snipes a recently deleted message')
            .addField('`spotify <@user>`', 'Sends the stats of a song that a user is listening to on Spotify')
            .addField('`suggest <suggestion>`', 'Checks if there is a suggestions channel and sends your suggestion into the channel. (Must be called `suggestions`)')
            .addField('`support`', 'Sends a link to the bots support server')
            .addField('`ticket`', 'Opens a new ticket and creates a channel for the staff team')
            .addField('`trivia`', 'Lets you play a game of trivia (beta)')
            .addField('`uptime`', 'Checks the bot\'s uptime')
            .addField('`userinfo`', 'Lets you see your or someone else\'s information (name, creation date, roles, etc)')
            .addField('`weather <city>`', 'Checks weather forecast for provided location')
            .setTimestamp()
        const economy = new Discord.MessageEmbed()
            .setTitle('Economy commands')
            .addField('`balance`', 'Checks your balance')
            .addField('`daily`', 'Allows you to claim your daily $')
            .addField('`gamble`', 'Allows you to pursue an addictive gambling addiction')
            .addField('`leaderboard`', 'Lets you see who the richest people are')
            .addField('`give`', 'Allows you to give someone money')
            .addField('`payall`', 'Lets you give money to everyone in the server')
            .setDescription('<> stands for required, [] stands for choice')
            .setTimestamp()
        const owner = new Discord.MessageEmbed()
            .setTitle('Owner commands for FredTheBread#6932')
            .addField('`blacklist <@user>`', 'Blacklists a user from using the bot')
            .addField('`eval <something>`', 'Evaluates a line of code')
            .addField('`leave`', 'Makes the bot leave the server')
            .addField('`status <something>`', 'Changes the bot\'s status')
            .addField('`unblacklist <@user>`', 'Unblacklists a user from the bot')
            .setTimestamp()
        const pages = [
            fun,
            fun2,
            moderation,
            economy,
            owner
        ]
        const page1 = [
            fun,
            fun2,
            moderation,
            economy,
            owner
        ]
        const page2 = [
            fun2,
            moderation,
            economy,
            owner,
            fun
        ]
        const page3 = [
            moderation,
            economy,
            owner,
            fun,
            fun2
        ]
        const page4 = [
            economy,
            owner,
            fun,
            fun2,
            moderation
        ]
        const page5 = [
            owner,
            fun,
            fun2,
            moderation,
            economy
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';
        if(!args[0]) {
            pagination(message, pages, emojiList, timeout)
        } else if (args[0] == 1) {
            pagination(message, page1, emojiList, timeout)
        } else if (args[0] == 2) {
            pagination(message, page2, emojiList, timeout)
        } else if (args[0] == 3) {
            pagination(message, page3, emojiList, timeout)
        } else if (args[0] == 4) {
            pagination(message, page4, emojiList, timeout)
        } else if (args[0] == 5) {
            pagination(message, page5, emojiList, timeout)
        }    
        
    }
}