const Discord = require('discord.js');

module.exports = {
    name: "kiss",
    category: "info",
    description: "You can virtually kiss somoene",
    run: async (client, message, args) => {

        var list = [
            'https://imgur.com/iclUiUN.gif',
            'https://imgur.com/lYQt9rx.gif',
            'https://imgur.com/w1TU5mR.gif'
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]);
        if (!user) {
            return message.reply('remember to mention a valid user to kiss!');
        }
        let avatar = message.author.displayAvatarURL({
            format: "png"
        });
        const embed = new Discord.MessageEmbed()
            .setTitle('Kiss')
            .setColor('#000000')
            .setDescription(`${message.author} kissed ${user}`)
            .setImage(rand)
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter('Kissu kissu kissu')
            .setAuthor(message.author.tag, avatar);
        await message.channel.send(embed);
    }
}