const mySecret = process.env['TOKEN']
const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', ()=>{
  console.log("The Client Is Ready!")
})

client.login(mySecret)