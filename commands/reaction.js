const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reaction")
    .setDescription("reaction testing"),

  async execute(interaction, client) {
    const message = await interaction.reply({
      content: "xdx!",
      fetchReply: true,
    });

    // finds emoji from any server bot is in
    let foundEmoji;
    let emojiId = '1077736591507865700'

    client.guilds.cache.forEach((guild) => {
      const emoji = guild.emojis.cache.find((emoji) => emoji.id === emojiId);
      if (emoji) {
        foundEmoji = emoji;
        return;
      }
    });

    // finds emoji in that server
    // const emoji = interaction.client.guilds.cache.emojis.find(emoji => emoji.id === '1077736591507865700');

    message.react(foundEmoji);
  },
};
