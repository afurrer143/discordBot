const reactionPin = require("../reactionTest/reactionPin");
const reactionMessage = require("../reactionTest/reactionMessage");


module.exports = {
  name: "messageReactionAdd",
  async execute(reaction, user, client) {

    // partial message handler (aka message made before the bot was turned online)
    if (reaction.partial) {
      // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled;
      try {
        await reaction.fetch();
        // so on partial message, it fetches it in that current state. so example when make a new reaction, it will fetch it before the reaction is there
      } catch (error) {
        if (error)
          console.error(
            "Something went wrong when fetching the message: ",
            error
          );
      }
      console.log(
        `Reaction made a partial message.`
      );
    }

       // current id 1077698090695409834, is :uwucat: in main discord
      // id 1077736591507865700 is :xdx: in bot testing server
      // id 1015394637193674792 is :BurgerDog: in main discord
      // id 1030866603828588606 is :balling: in main discord (since its emoji gif need nitro to do it, so do not like)

      console.log(`${user.username} reacted with "${reaction.emoji.name}".`)

      if (reaction.emoji.id === '1077736591507865700') {
        reactionPin.execute(reaction, client)
      }
     
      if (reaction.emoji.id === '1030866603828588606') {
        reactionMessage.execute(reaction)
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
