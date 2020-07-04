const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "RANDOM";
const ErrorMessage = `Error In Getting Information | Please Try Again Later!`;
const ErrorEmbedColor = "RED";

module.exports = {
  name: "lmgtfy",
  description: "Let Me Google That For You",
  aliases: ["google"],
  usage: "lmgtfy <Search Term>",
  example: "lmgtfy Minecraft",
  run: async (client, message, args) => {
    try {

     const Search = message.content
        .split(" ")
        .slice(1)
        .join("+")
        .toLowerCase();
    
      if (!Search) {
        message.channel.send(`Please Give Me Search Term!`);
      } else {
        const embed = new MessageEmbed()
          .setColor(`${EmbedColor}`)
          .setDescription(`[Here is your result](https://lmgtfy.com/?qtype=search&q=${Search})`)
		  message.channel.send(embed)};

      await message.delete();
    } catch (error) {
      console.log(error);
      message.channel.send(
        new MessageEmbed()
          .setColor(`${ErrorEmbedColor}`)
          .setDescription(`${ErrorMessage}`)
          .setFooter(`Sorry For Error!`)
          .setTimestamp()
      );
    }
  }
}