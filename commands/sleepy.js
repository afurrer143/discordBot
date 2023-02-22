const { SlashCommandBuilder } = require("@discordjs/builders");
const { AttachmentBuilder, EmbedBuilder } = require("discord.js");

// inside a command,event listener, etc.
const thumbnail = new AttachmentBuilder("../DiscordBot/images/thumbnail.png");
const sleepyCatImage = new AttachmentBuilder(
  "../DiscordBot/images/SleepCat.jpg"
);


//the execute slash command plus its info
module.exports = {
  data: new SlashCommandBuilder()
  .setName("sleepy")
  .setDescription("Post the sleepy cat"),
  async execute(interaction) {

    const sleepyEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Sleepy Kitten")
      .setImage("attachment://SleepCat.jpg")
      .setTimestamp()
      .setAuthor({
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag
    })
      .setFooter({
        text: `He do be sleeping`,
        iconURL: "attachment://thumbnail.png",
      });
      
    await interaction.reply({
      embeds: [sleepyEmbed],
      files: [thumbnail, sleepyCatImage],
    });
  },
};

//I wanna make it embed or send the file, rather than a URL

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName("sleepy")
//         .setDescription("Post the sleepy cat"),
//     async execute(interaction) {
//         await interaction.reply("https://cdn.discordapp.com/attachments/1027068403904688168/1027070286434140182/j69udnmu2bq91.jpg");
//     }
// }
