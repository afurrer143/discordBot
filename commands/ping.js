const { SlashCommandBuilder, messageLink } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  async execute(interaction, client) {
    //to react to the message, I had to set it to a variable, and then do a ,react to that
    const message = await interaction.reply({
      content: "Pong!",
      fetchReply: true,
    });
    message.react("🏓");
  },
};
