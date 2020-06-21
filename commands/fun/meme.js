const randomPuppy = require('random-puppy')
const Discord = require('discord.js')
module.exports = {
    name: "meme",
    category: "fun",
    description: "Gives you a funny meme",
    run: async (client, message, args) => {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    
        randomPuppy(subreddit).then(async body => {
            let cEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`A new fresh Meme from Reddit appeared!`, message.guild.iconURL)
                .setImage(body)
            message.channel.send(cEmbed)
        })
    }
}