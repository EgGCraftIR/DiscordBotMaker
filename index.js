const discord = require("discord.js")
const config = require("./config.json")
const client = new discord.Client()
const prefix = config.prefix

client.on('ready', () => {
    console.log(`Your Bot: ${client.user.tag}`)
    client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: "WATCHING" })
})

client.on('message', message => {
if (message.author.bot || message.channel.type === "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if(command == `${prefix}ping`) {
        let testcommand = new discord.MessageEmbed()
        testcommand.setTitle("Bot Source")
        testcommand.setURL("https://github.com/EgGCraftIR/DiscordBotMaker")
        testcommand.addField("ping(ms)", client.ws.ping)
        testcommand.addField("Guilds", client.guilds.cache.size)
        testcommand.setDescription("discordbotmaker v1.0 by just_amirHeHe#0485")
        testcommand.setTimestamp()
        testcommand.setFooter(`Requested By ${message.author.tag}`)
    }
})

client.login(config.token)