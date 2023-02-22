const { EmbedBuilder } = require("discord.js");

module.exports = {
    async execute(reaction, client) {
        // so on whatever pin emoji is, it replies. But it will do that each time. So if numberToPin was 10, it would make 9 seperate replies before pinning... how to fix
        // One idea. When the first message is made I have a "pinnedMessagesCollector" object or something like that which will I will put the id of message that got reacted to and the bot response. EX {messageToPinId: pollcounterMessageId}. 
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
            const replyMessage = await message.reply({embeds: [embed], allowedMentions: { repliedUser: false } });
        }
    }
}