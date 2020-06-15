const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setleave",
  category: "info",
  usage: "setleave <#channel>",
  description: "Sets The Leave Channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`leavechannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Leave Channel is set to ${channel}`)
  }
}