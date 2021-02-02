module.exports = {
    name: 'uptime',
    aliases : ['up'],
    description: "Returns how long the bot has been on for",
    run: async (client, message) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        message.channel.send(`**Uptime :**\n${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
}