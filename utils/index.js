const {
    readdirSync
} = require('fs')

function getCommands() {
    let catgories = [];

    readdirSync('./commands/').forEach((dir) => {
        const directories = readdirSync(`./commands/${dir}`).filter((file) => file.endsWith('.js'));

        const value = [];

        const commands = directories.map((command) => {
            const file = require(`../commands/${dir}/${command}`)

            value.push({
                name: file.name ? file.name : 'No command name',
                description: file.description ? file.description : 'No description available',
                aliases: file.aliases ? file.aliases : 'No aliases available',
                usage: file.usage ? file.usage : 'No usage available'
            })
        })

        let data = new Object();

        data = {
            name: dir.toUpperCase(),
            value,
        };

        catgories.push(data);
    })
    return catgories;
}

module.exports = {
    getCommands
}