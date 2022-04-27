import { Client, Intents } from 'discord.js'
import { config } from 'dotenv'

config()

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.login()

client.once('ready', (client) => {
    console.log(client.user.username + ' Ready!!!')
})

client.on('messageCreate', (message) => {
    console.log(message.content)
})

client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (oldMember.displayName !== newMember.displayName)
        console.log(oldMember.displayName + ' changed their name to ' + newMember.displayName)
})