const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows my commands"),


  async execute(interaction, client) {
    let commands = client.commands
    let helpReturn = ""
    commands.forEach(command => {
      helpReturn += "**" + command.data.name + "**" + " : " + command.data.description + " \n\n"
    });

    const embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTimestamp()
    .setAuthor({
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag
    })
    .setFooter({
        text: client.user.tag,
        iconURL: client.user.displayAvatarURL()
    })
    .setDescription(`My current commands are: \n \n${helpReturn}`)
    
    return interaction.reply({
      embeds: [embed]
  })
  },
};
