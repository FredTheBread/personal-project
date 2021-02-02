module.exports = {
    name: "crap",
    aliases: ["shit"],
    description: "Returns latency and API ping",
    timeout: 10000,
    run: async (message, args) => {
        const stepped = args[0];
        const stepper = message.author();

        const fetchURL = "https://api.no-api-key.com/api/v2/crap"
        fetch(fetchURL);
    }
};