const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: 'cov',
  aliases: ['corona'],
  category: 'info',
  description: 'Get current statics of corona of your country/continent/world',
  run: async(client, message, args) => {
    if(args[0] !== 'all') {
    var options = {
      url: 'https://disease.sh/v2/countries/' + args[0],
      json: true
    }
    } if(args[0] === 'all') {
      options = {
        url: 'https://disease.sh/v2/all',
        json: true
      }
    }
    let nembed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Country not found or doesn\'t have any cases')
    let oembed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Fetching data from the internet for the best output')
    message.channel.send(oembed).then(msg => {
      get(options).then(body => {
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Corona status of ` + (body.country === undefined? 'all countries': body.country))
        .addField('Total Cases', body.cases, true)
        .addField('Cases in 24h', body.todayCases, true)
        .addField('Total Deaths', body.deaths, true)
        .addField('Deaths in 24h', body.todayDeaths, true)
        .addField('Total recovered', body.recovered, true)
        .addField('Total Active Cases', body.active, true)
        .addField('Critical', body.critical, true)
        .addField('CPM', body.casesPerOneMillion, true)
        .addField('DPM', body.deathsPerOneMillion, true)
        .addField('Total tests', body.tests, true)
        .addField('TPM', body.testsPerOneMillion, true)
        .setTimestamp()
        .setFooter('CPM: cases per million  DPM: deaths per million  TPM: tests per million')
        if(args[0] !== 'all') embed.addField('Name of country', body.country, true)
        if(args[0] !== 'all') embed.setThumbnail(body.countryInfo.flag)
        msg.edit(embed)
      })
      .catch(body => {
         msg.edit(nembed + body)
      })
    })
  }
}