const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setleave",
  category: "info",
  usage: "setleave <#channel>",
  description: "Sets The Leave Channel",
  run: (client, message, args) => {

    let channel = message.mentions.channels.first()

    if (args[0] === 'clear', 'reset') {
      db.set(`leavechannel_${message.guild.id}`, null)
      message.channel.send("Leave channel has been reset. No goodbye messages will be sent!")
    } else {
      if (!channel) {
        return message.channel.send("Please Mention the channel first")
      }
      db.set(`leavechannel_${message.guild.id}`, channel.id)

      message.channel.send(`Leave Channel has been set to ${channel}`)
    }

  }
}