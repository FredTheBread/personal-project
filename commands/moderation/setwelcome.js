const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "welcomer",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {

    let channel = message.mentions.channels.first()


    if (args[0] === 'clear') {
      db.set(`welchannel_${message.guild.id}`, null)
      message.channel.send("Done!")
    } else {
      if (!channel) {
        return message.channel.send("Please Mention the channel first")
      }
      db.set(`welchannel_${message.guild.id}`, channel.id)
      message.channel.send(`Welcome Channel is set to ${channel}`)
    }
    
  }
}