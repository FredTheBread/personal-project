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
    name: "payall",
    category: "economy",
    description: "Pay everybody money",
    run: async (client, message, args) => {
        if(message.author.id != "673485740679757835") return;

        Data.find({
            lb: "all"
        }).sort([
            ['money', 'descending']
        ]).exec((err, res) => {
            if(err) console.log(err);
    
            if(!args[0]) return message.reply("please specify an amount!");
            if(args[0] != Math.floor(args[0])) return message.reply("please only enter whole numbers!");
    
            if(!res) return message.reply("no users found!");
    
            for(i = 0; i < res.length; i++) {
                Data.findOne({
                    userID: res[i].userID
                }, (err, data) => {
                    if(err) console.log(err);
                    if (data) {
                        data.money -= parseInt(args[0]);
                        data.save().catch(err => console.log(err));
                    }
                })
            }
    
            return message.channel.send(`${message.author.username} gave everyone $${args[0]}! 🥳🎉`);
        })
    }
}