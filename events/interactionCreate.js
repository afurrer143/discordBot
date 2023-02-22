// i added client to event.execute on event handler. So maybe that can be passed down now?

module.exports = {
    name: "interactionCreate",
    async execute (interaction, client) {
        if (!interaction.isCommand()) return;

        // gets the specific command done (ex: /avatar)
        const command = interaction.client.commands.get(interaction.commandName);
      
        if (!command) return;

        // since it has the specific command, it then runs that commands .execute
        try {
          await command.execute(interaction, client);
        } catch(err) {
          if (err) console.error(err);
      
          await interaction.reply({
            content: "An error occured while executing that command",
            ephemeral: true
          });
        }
    }
}
