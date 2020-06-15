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
    
        message.channel.startTyping();
        randomPuppy(subreddit).then(async body => {
            let cEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`${bot.user.username} Meme!`, message.guild.iconURL)
                .setImage(body)
                .setTimestamp()
                .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)
            message.channel.send(cEmbed)
        })
    }
}