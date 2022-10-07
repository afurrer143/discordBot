// dont work
// module.exports = {
//     name: "messageReactionAdd",
//     async execute (reaction) {
//         if (reaction.partial) {
//             // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled;
//             console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`)
//             try {
//                 await reaction.fetch();

//             } catch (error) {
//                 console.error('Something went wrong when fetching the message:', error);
//                 // Return as `reaction.message.author` may be undefined/null
//                 return;
//             }
//         }
//     }
// }

