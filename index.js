const fs = require('fs')
const {Intents, Client, Collection} = require('discord.js')
const {TOKEN} = require("./config.json")

const client = new Client({intents:[Intents.FLAGS.GUILDS]})

client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.data.set, command)
}

client.on('ready', ()=>{
  console.log("The Client Is Ready!")
})

client.on('interactionCreate', async interaction => {
  if(!interaction.isCommand()) return
  const command = client.commands.get(interaction.commandName)
  if(!command) return
  try{
    await command.execute(interaction)
  } catch(error) {
    console.error(error)
    await interaction.reply({content: 'There was an error trying to execute this command.', ephemeral:true})
  }
})

client.on('interactionCreate', interaction => {
	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
});

client.login(TOKEN)