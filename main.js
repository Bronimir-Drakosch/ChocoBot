const Discord = require('discord.js')
require('dotenv').config()

const ChocoBot = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

ChocoBot.on('ready', ( ) => {
    console.log(`ChocoBot: Online as ${ChocoBot.user.tag}`)
});

ChocoBot.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World")
    }
})

ChocoBot.login(process.env.TOKEN)