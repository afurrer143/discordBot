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
        //wwanna make something sassy if you do the bot here. Mild problem of its hard code, so if i change bot name this breaks
        // sumi bot name vari is client.user.username  
        if (user.username === "Sumi Bot 3.0") return interaction.reply(`Why I am glad you like my profile pic so much, here it is for you: ${user.displayAvatarURL({ dynamic: true })}`);
        if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL()}`);
    },
}; 