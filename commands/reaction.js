const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reaction")
    .setDescription("reaction testing"),

  async execute(interaction) {
    const message = await interaction.reply({
      content: "xdx!",
      fetchReply: true,
    });
    // const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'xdx');
    // message.react(reactionEmoji);

    // I do not know why, but I can not pass client here, I can however get client from interaction (rememer client means my bot)

    // with the emojis.cache the bot could have access to an emoji in 1 server, and use it anywhere...but i can not get it to work, It seems to not be able to find the emoji
    // const emoji1 = interaction.client.emojis.cache.get('1077736624034689154')

    const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'xdx');

    message.react(emoji);
  },
};
