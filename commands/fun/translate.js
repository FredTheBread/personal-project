const fetch = require("node-fetch"),
cheerio = require("cheerio");
module.exports = {
    name: "translate",
    aliases: ['t'],
    description: "Translate any word in english",
    run: async (bot, message, args) => {
        async function translate (message, text) {
            if(!message) {
              throw new ReferenceError("'message' must be passed down as param! (translate)");
        }
            if(!text) {
              throw new ReferenceError("'text' must be passed down as param! (translate)");
        }
        const body = await fetch(`https://translate.google.com/m?sl=auto&tl=${message.languages.id}&hl=en-US&q=${encodeURIComponent(text)}`)
        .then((res) => res.text())
        .then((html) => cheerio.load(html));
        if (!body) return "I could'nt find that languages, maybe try something that really exists.";
        const results = body("div.result-container").text();
        const lang = body("div.sl-and-tl a").last().text();
    
        return results;
    
      }
    }
}