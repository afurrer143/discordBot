const { SlashCommandBuilder, messageLink } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  async execute(interaction) {
    //to react to the message, I had to set it to a variable, and then do a ,react to that
    const message = await interaction.reply({
      content: "Pong!",
      fetchReply: true,
    });

    // with interaction.deferReply i can do it this way to 
    // const newMessage = `Pong!`
    // await interaction.editReply({
    //   content: newMessage
    // })
    
    message.react("🏓");
  },
};
