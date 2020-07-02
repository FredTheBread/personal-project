module.exports = {
    name: "lockdown",
    category: "moderation",
    description: "Lockdown a server",
    run: async (client, message, args) => {
        if (!client.lockit) client.lockit = [];
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:b_no:721969465205588048> | You don't have the permission to do that!");

        message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        })
        message.channel.send(`**${message.author.username}** locked down this channel.`);
    }
}