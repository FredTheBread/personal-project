const Discord = require("discord.js");
const superagent = require('superagent')
module.exports = {
  name: "pug",
  category: "animals",
  aliases: ["doggo"],
  usage: "$pug",
  description: "Shows you a cute image of a pug",
  run: async (client, message, args) => {
    let {
      body
    } = await superagent
      .get(`https://dog.ceo/api/breed/pug/images/random`)
    if (!{
        body
      }) return message.channel.send("I broke! Try again.")

    let dEmbed = new Discord.MessageEmbed()
      .setColor(`CYAN`)
      .setImage(body.message)

    message.channel.send(dEmbed)
  }
}