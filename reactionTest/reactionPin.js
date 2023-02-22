const { EmbedBuilder } = require("discord.js");

module.exports = {
    async execute(reaction, client) {
        let numberToPin = 3

        const embed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTimestamp()
            // <:emoji_name:emoji_id>
            .setDescription(`To pin this message just react with <:${reaction.emoji.name}:${reaction.emoji.id}> ${numberToPin - reaction.count} more times`)
            .setFooter({
                text: client.user.tag,
                iconURL: client.user.displayAvatarURL()
            })

        if (reaction.emoji.count == numberToPin) {
            reaction.message.pin()
        } else {
            const message = await reaction.message.fetch();
            await message.reply({embeds: [embed]});
            // reaction.message.channel.send({embeds: [embed]})
        }
    }
}