const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bird",
    description: "Get a random image and fact about birds",
    usage: "$bird",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/birb";
        const facts = "https://some-random-api.ml/facts/birb"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Bird Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}