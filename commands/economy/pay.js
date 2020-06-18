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
    name: "pay",
    category: "economy",
    description: "Pay someone some money",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) return message.reply("Sorry, I can't find that user bruh.");
        if (user.id === message.author.id) return message.reply("you cannot pay yourself!");
        if(args[1] != Math.floor(args[1])) return message.reply("please enter only whole numbers!");
    
        Data.findOne({
            userID: message.author.id
        }, (err, authorData) => {
            if(err) console.log(err);
            if(!authorData) {
                return message.reply("you don't have any money to sent!");
            } else {
                Data.findOne({
                    userID: user.id
                }, (err, userData) => {
                    if(err) console.log(err);
                    if (!args[1]) return message.reply("Please specify the amount you want to give that user.");
    
                    if (parseInt(args[1]) > authorData.money) return message.reply("You don't have enough money bruv.");
    
                    if (parseInt(args[1]) < 1) return message.reply("You cannot pay less than 1$.");
    
                    if(!userData) {
                        const newData = new Data({
                            name: client.users.cache.get(user.id).username,
                            userID: user.id,
                            lb: "all",
                            money: parseInt(args[1]),
                            daily: 0,
                        })
                        authorData.money -= parseInt(args[1]);
                        newData.save().catch(err => console.log(err));
                        authorData.save().catch(err => console.log(err));
                    } else {
                        userData.money += parseInt(args[1]);
                        authorData.money -= parseInt(args[1]);
                        userData.save().catch(err => console.log(err));
                        authorData.save().catch(err => console.log(err));
                    }
    
                    return message.channel.send(`${message.author.username} gave $${args[1]} to ${user.username}. Their balance is $${userData.money}.`)
                })
            }
        })
    }
}