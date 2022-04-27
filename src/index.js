import { Client, Intents } from 'discord.js'
import { config } from 'dotenv'
import { readdirSync } from 'fs'

config()

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

// Load all events in ./events/
for (const fileName of readdirSync('./src/events/').filter(file => file.includes('.event.'))) {
    const eventFile = await import(`./events/${fileName}`)
    const eventName = fileName.split('.')[0]
    client.on(eventName, eventFile.default.run)
    console.log(`\x1b[34mLoaded event \x1b[0m${eventName}`)  
}

client.login()