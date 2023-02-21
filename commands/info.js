//const { SlashCommandBuilder } = require('discord.js');
const { SlashCommandBuilder,Client, GatewayIntentBits, Collection, messageLink, MessageFlags, GuildMember, Guild } = require('discord.js');

function convertToDate (unixTimestamp) {
    let fullDate = new Date(unixTimestamp)
    let date = fullDate.getDate() //Returns the day of the month (1 – 31)
    let month = fullDate.getMonth() + 1// Returns the month (0 – 11)
    let year = fullDate.getFullYear() //Returns the year (4 digits for 4-digit years)
    return `${month}/${date}/${year}`
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),


        async execute(interaction) {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');

			if (user) {
				await interaction.reply(`Username: ${user.tag}\n Created on: ${convertToDate(user.createdTimestamp)} \n`);
			} else {
				await interaction.reply(`Your username: ${interaction.user.tag}\n You made the account on ${convertToDate(interaction.user.createdTimestamp)}`);
			}
		} else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		}
	}
    
}