const {SlashCommandBuilder} = require("@discord.js/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Reply with some server info!'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`)
    }
}