const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar URL of the selected user, or your own avatar.')
        .addUserOption(option => 
            option
                .setName('target')
                .setDescription('The user\'s avatar to show')),

    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (!user) {
            return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL()}`)
        }
        //wwanna make something sassy if you do the bot here. Mild problem of its hard code, so if i change bot name this breaks
        if (user.username === interaction.client.user.username) 
            return interaction.reply(`Why I am glad you like my profile pic so much, here it is for you: ${user.displayAvatarURL({ dynamic: true })}`);

        if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);


    },
}; 