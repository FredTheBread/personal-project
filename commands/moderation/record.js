const fs = require('fs');
module.exports = {
    name: "record",
    description: "Records your audio in a voice channel",
    run: async (bot, message, args) => {
        const voicechannel = message.member.voice.channel;
    if (!voicechannel) return message.channel.send("Please join a voice channel first!");

    const connection = await message.member.voice.channel.join();
    const receiver = connection.receiver.createStream(message.member, {
        mode: "pcm",
        end: "silence"
    });
    let authorVoiceChannel = message.member.voiceChannel;
    const writer = receiver.pipe(fs.createWriteStream(`./recorded-${message.author.id}.pcm`));
    writer.on("finish", () => {
        authorVoiceChannel.leave()
        message.channel.send("Finished writing audio");
    });
    }
};