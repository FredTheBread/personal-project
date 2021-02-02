const redMessage = require("./redMessage");

module.exports = {
    name: 'setavatar',
    description: 'Set bot avatar',
    run: async (client, message, args) => {
        if (message.author.id !== "673485740679757835") {
            return message.channel.send(`This is a Owner only command`);
        }
        if (!args || args.length < 1) {
            return message.channel.send('Please provide me with a valid link to set my avatar.')
        }
        client.user.setAvatar(args.join(' '))

        message.channel
            .send('My Profile picture has been changed!')
            .then((m) => m.delete({
                timeout: 10000
            }))
    }
}