const {
    Client,
    Collection
} = require("discord.js");
const {
    config
} = require("dotenv");
const discord = require("discord.js");
const client = new Client({
    disableEveryone: true
});
const db = require('quick.db');
const {
    addexp
} = require("./handlers/xp.js");

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Map();
client.config = require("./config.json");
client.config = config;

client.on('messageDelete', function (message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);
    /*
    client.user.setActivity(db.get(`status`))
    */
    function randomStatus() {

        let status = ["Discord Bot", "YouTube", "Discord", "Minecraft", "Node.js", "Your Mom", "Fortnite", "Epic Games", "Twitch", "Github", "Coding", "Warzone", "Valorant", "Hacking into the FBI", "Don't spam please", "https://discord.gg/2pzzqnP join please"] // You can change it whatever you want.
        let rstatus = Math.floor(Math.random() * status.length);

        // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
        // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
        // Example: streaming
        client.user.setPresence({
            activity: {
                name: `${client.users.cache.size} Users`,
                type: 'WATCHING'
            },
            status: "online"
        }, )
    };
    setInterval(randomStatus, 30000)
});

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});


client.on("message", async message => {
    const prefix = "$";
    let blacklist = await db.fetch(`blacklist_${message.author.id}`);
    if (blacklist === "Blacklisted") return;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;


    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command)
        command.run(client, message, args);
    return addexp(message)
});

client.on("message", message => {
    if (message.mentions.members.has("709328387214147667")) {
        return message.channel.send("My prefix is **$**")
    }
});


let stats = {
    serverID: '689568955345797204',
    total: "726685404341862451",
    member: "726685448075739227",
    bots: "726685534243651634"
}

client.on("guildMemberAdd", (member) => { //usage of welcome event
    let chx = db.get(`welchannel_${member.guild.id}`); //defining var

    if (chx === null) { //check if var have value or not
        return;
    }

    let wembed = new discord.MessageEmbed() //define embed
        .setAuthor(member.user.username, member.user.avatarURL())
        .addField("Member Count:", member.guild.memberCount)
        .setColor("#0032FF")
        .setThumbnail(member.user.avatarURL())
        .setDescription(`We are very happy to have you in our server`);

    client.channels.cache.get(chx).send(wembed) //get channel and send embed
});

client.on("guildMemberRemove", (member) => {
    let chx = db.get(`leavechannel_${member.guild.id}`);

    if (chx === null) {
        return;
    }

    let oembed = new discord.MessageEmbed()
        .setAuthor(member.user.username, member.user.avatarURL())
        .addField("Member Count:", member.guild.memberCount)
        .setColor("#FF2D00")
        .setThumbnail(member.user.avatarURL())
        .setDescription(`We are very sad to say that ${member.user} has left the server`);
    client.channels.cache.get(chx).send(oembed)
});


client.on('guildMemberAdd', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    
})
client.login(process.env.TOKEN);