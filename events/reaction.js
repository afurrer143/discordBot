//only works once. Stuck in loop?
module.exports = {
  name: "messageReactionAdd",
  async execute(reaction, user) {
    if (reaction.message.partial) {
      // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled;
      try {
        await reaction.message.fetch();
      } catch (error) {
        if (error)
          console.error(
            "Something went wrong when fetching the message: ",
            error
          );
      }
      console.log(
        `On a partial message, ${user.username} reacted with "${reaction.emoji.name}".`
      );
      //the if reaction.message.partial message partial ends here
    } else {
      console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
    }
  },
};

// client.on('messageReactionAdd', async (reaction, user) => {
// 	if (reaction.message.partial) {
// 		try {
// 			await reaction.message.fetch();
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message: ', error);
// 		}
// 	}

// 	console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
// });
