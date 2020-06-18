const Discord = require("discord.js");
const fs = require("fs");
const ms = require("parse-ms");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");


// CONNECT TO DATABASE
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../../models/data.js");

module.exports = {
    name: "daily",
    category: "economy",
    description: "Collects your daily reward",
    run: async (client, message, args) => {
        let timeout = 86400000;
        let reward = 100;
    
        let embed = new Discord.MessageEmbed();
        embed.setTitle("Daily Reward");
    
        Data.findOne({
            userID: message.author.id,
        }, (err, data) => {
            if(err) console.log(err);
            if(!data){
                const newData = new Data({
                    name: message.author.username,
                    userID: message.author.id,
                    lb: "all", 
                    money: reward,
                    daily: Date.now(),
                })
                newData.save().catch(err => console.log(err));
                return message.channel.send(`${message.author.username} has $${reward}.`);
            }else {
                if(timeout - (Date.now() - data.daily) > 0) {
                    let time = ms(timeout - (Date.now() - data.daily));
    
                    embed.setColor("ff0000");
                    embed.setDescription(`**You already collected your daily reward!**`);
                    embed.addField(`Collect again in`, `**${time.hours}h ${time.minutes}m ${time.seconds}s**`);
                    return message.channel.send(embed);
                } else {
                    data.money += reward;
                    data.save().catch(err => console.log(err));
                    data.daily = Date.now();
    
    
                    embed.setDescription(`You have collected your daily reward of ${reward}. Current balance is ${data.money}.`);
                    embed.setColor("RANDOM");
                    return message.channel.send(embed);
                }
                //return message.channel.send(`${message.author.username} has $${data.money}.`);
            }
        })
    }
}