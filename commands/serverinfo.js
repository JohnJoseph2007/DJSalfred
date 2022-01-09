const {SlashCommandBuilder} = require("@discord.js/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Reply with some server info!'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
    }
}