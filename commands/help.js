const { SlashCommandBuilder } = require("@discordjs/builders");

//doesnt work for now   worry later
//so it doesnt work cause A. commands are unknown in the file
//and B.) commandd is an array, need it an string
module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("shows my commands"),
    // async execute(interaction) {
    //      await interaction.reply("commands here");
    // }
    async execute(interaction) {
         await interaction.reply("commands here");
    }
}