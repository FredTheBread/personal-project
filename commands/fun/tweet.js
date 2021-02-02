module.exports = {
    name: "tweet",
    usage: "tweet <username> <text>",
    description: "Tweet something",
    run: async (bot, message, args) => {
        const m = await message.channel.send("Please wait....")
        let user = args[0];
        let text = args.slice(1).join(" ");


        if(!user){
            return message.channel.send("You have to specify a twitter username!");
        }

        if(!text){
            return message.channel.send("You have to specify a message!");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(``, attachment);
            m.delete();
        } catch(e){
            m.edit("Error, Try Again! Mention Someone");
        }
    },
};