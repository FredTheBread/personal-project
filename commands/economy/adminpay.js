const fs = require("fs");
const mongoose = require("mongoose");
const botconfig = require("../../config.json");

// CONNECT TO DATABASE
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../../models/data.js");

module.exports = {
    name: "adminpay",
    category: "economy",
    aliases: ["ap"],
    description: "Gives everyone money",
    run: async (client, message, args) => {
        if (message.author.id != "673485740679757835") return message.reply("you cannot use this command!");
        let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        if (!user) return message.reply("Sorry, I can't find that user bruh.");
        if (args[1] != Math.floor(args[1])) return message.reply("please enter only whole numbers!");

        Data.findOne({
            userID: user.id
        }, (err, userData) => {
            if (err) console.log(err);
            if (!args[1]) return message.reply("please specify the amount you want to give that user.");

            if (!userData) {
                const newData = new Data({
                    name: bot.users.cache.get(user.id).username,
                    userID: user.id,
                    lb: "all",
                    money: parseInt(args[1]),
                    daily: 0,
                })
                newData.save().catch(err => console.log(err));
            } else {
                userData.money += parseInt(args[1]);
                userData.save().catch(err => console.log(err));
            }
            return message.channel.send(`${message.author.username} **admin** paid $${args[1]} to ${user.username}. Their balance is $${userData.money}.`)
        })
    }
}