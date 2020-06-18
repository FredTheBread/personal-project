const Discord = require("discord.js")
const superagent = require("superagent")
module.exports = {
    name: "dog",
    category: "info",
    aliases: ["doggo"],
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

        let {
            body
        } = await superagent
            .get(`https://dog.ceo/api/breeds/image/random`)
        //console.log(body.file)
        if (!{
                body
            }) return message.channel.send("I broke! Try again.")

        let dEmbed = new Discord.MessageEmbed()
            .setColor(`CYAN`)
            .setAuthor(`Management Bot DOGS!`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter(`Management BOT`, client.user.displayAvatarURL)

        message.channel.send({
            embed: dEmbed
        })
    }
}