const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("Repeats message only you can see")
        .addStringOption((option) =>
            option  
                .setName("message")
                .setDescription("The message we repeat")
                .setRequired(true)
        ),
     async execute(interaction) {
        interaction.reply({
            content: interaction.options.getString("message"),
            ephemeral: true,
        });
     },
    };