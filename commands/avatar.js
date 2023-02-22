const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar URL of the selected user, or your own avatar.')
        .addUserOption(option => 
            option
                .setName('target')
                .setDescription('The user\'s avatar to show')),

    async execute(interaction, client) {
        // set up the basics of the embed
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

        const user = interaction.options.getUser('target');
        if (!user) {
            embed.setTitle(`Your avatar`)
            embed.setImage(interaction.user.displayAvatarURL())

            return interaction.reply({
                embeds: [embed]
            })
        }
        //wanna make something sassy if you do the bot here. Mild problem of its hard code, so if i change bot name this breaks
        if (user?.username === interaction.client.user.username) {
            embed.setTitle(`Why I am glad you like my profile pic so much`)
            embed.setImage(user.displayAvatarURL({ dynamic: true }))

            return interaction.reply({
                embeds: [embed]
            })

        } else if (user) {
            embed.setTitle(`${user.username}'s avatar`)
            embed.setImage(user.displayAvatarURL({ dynamic: true }))

            return interaction.reply({
                embeds: [embed]
            })

        }       
 
    },
}; 