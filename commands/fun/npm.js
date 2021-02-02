const Discord = require("discord.js");
const {
    MessageEmbed
} = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
    name: "npm",
    description: "Get package information from NPM",
    run: async (bot, message, args) => {

        if (!args[0]) message.channel.send('You must provide a package name to search for.');
        if (args[0]) {
            const res = await (await fetch(`https://registry.npmjs.org/${args[0]}`)).json();
            if (!res) {
                throw `Cannot find '${args[0]}' package.`;
            }
            const body = res.versions[res['dist-tags'].latest];
            const embed = new MessageEmbed()
                .setTitle(`npm | ${body.name}`)
                .setURL(`https://www.npmjs.com/package/${body.name}`)
                .setDescription(body.description)
                .setThumbnail(`https://cdn.auth0.com/blog/npm-package-development/logo.png`)
                .addField('Version', body.version, true)
                .addField('License', body.license, true)
                .addField('Repository', body.repository ? `[Click Here](${body.repository.url.split("+")[1]})` : "None", true)
                .addField('Dependencies', body.dependencies ? Object.keys(body.dependencies).join(', ') : 'None', true)
                .addField('Keywords', body.keywords ? body.keywords.join(', ') : 'None')
                .addField('Maintainers', body.maintainers.map(maintainer => maintainer.name).join(', '))
                .setColor('RED')
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
            message.channel.send(embed);

        }
    }

};