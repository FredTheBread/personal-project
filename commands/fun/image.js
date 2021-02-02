const img = require('images-scraper')

const google = new img({
    puppeteer: {
        headless: true,
    }
})

module.exports = {
    name: 'image',
    desciprition: "Searches on google images with your keyword",
    aliases: ["gimages", "images"],
    run: async (client, message, args) => {
        const query = args.join(" ")
        if (!query) return message.channel.send('Please enter a search query')
        message.channel.send("Searching on Google Images...").then(async msg => {
            const results = await google.scrape(query, 1)
            msg.delete()
            message.channel.send(results[0].url)
        })
    }
}