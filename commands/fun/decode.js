const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "decode",
    description: "Decodes binary into readable text",
    category: "extra",
    run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;
        if(!args[0]) return message.channel.send("Please input a binary message to decode!");
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }
        message.channel.send("Decoding...").then(async msg => {
        const embed = new MessageEmbed()
            .setTitle('Binary to text')
            .setDescription(data.text)

        await message.channel.send(embed)
        })
    }
}