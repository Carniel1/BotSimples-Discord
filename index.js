require('dotenv').config()

const { Client, Collection } = require('discord.js')
const { loadCommands, loadEvents } = require('./utils')
const client = new Client()

client.commands = new Collection()
client.startTime = Date.now()

loadCommands(client.commands, './commands')
loadEvents('./events', client)

client.login(process.env.AUTH_TOKEN)


