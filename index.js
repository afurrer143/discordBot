//adds requirements for the additional libraries I installed (such as discord JS, and ENV)
require('dotenv').config();
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, GatewayIntentBits, Collection, Partials,  messageLink, MessageFlags, GuildMember, Guild } = require('discord.js');

//intents give the bots permission to get certain info from discord
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMembers], 
  partials: [Partials.Message, Partials.Channel, Partials.Reaction], 
});

//Getting all the commands and files ending with .js
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

 
//similar to commands above, this gathers events folder (which houses the bot log in)
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
//running things in events
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, commands));
  } else {
    client.on(event.name, (...args) => event.execute(...args, commands));
  }
}


//left over. Moved bot log in/ register commands to ready.js

//So this part went from simple to not so simple
//client.on('ready', () => {
  //just prints in console bot logged in
    // console.log(`Logged in as ${client.user.tag}!`);

    // //the next parts...no clue what they do I believe it is something like sending my slash commands to discord server. Something about whether globablly or locally tho
    // //I think locally means for my "guild ID" server but mannn
    // const CLIENT_ID = client.user.id;
    // const rest = new REST({
    //   version: "9"
    // }).setToken(process.env.DISCORD_TOKEN_ENV);
    // (async () => {
    //     try {
    //       if (process.env.ENV === "production") {
    //         await rest.put(Routes.applicationCommands(CLIENT_ID), {
    //           body: commands
    //         });
    //         console.log("Sucessfully register commands globally")
    //       } else {
    //           await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
    //             body: commands
    //           });
    //           console.log("Sucessfully register commands locally")
    //       }
    //     } catch (err) {
    //       if (err) console.error(err);
    //     }
    // })();
  //});

  //This is what executes my ping command when summoned

//client.on("interactionCreate", async interaction => {
  // if (!interaction.isCommand()) return;

  // const command = client.commands.get(interaction.commandName);

  // if (!command) return;

  // try {
  //   await command.execute(interaction);
  // } catch(err) {
  //   if (err) console.error(err);

  //   await interaction.reply({
  //     content: "An error occured while executing that command",
  //     ephemeral: true
  //   });
  // }
//});


//normal chat commands i am too lazy to learn to put in seperate folder here


//ping pong command. the basics


client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === "ping") {
    message.reply(`Pong`)
  };
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === "test") {
    message.reply(`My client.user.username is ${client.user.username}\n Good luck using it in other modules`)
  };
});

//gonna TRY to make a thing to post discord avatar url with !avatar
//well i did that with slash command 

// client.on('messageCreate', (message) => {
//   if (message.content.startsWith("!")) {
//     if (message.content.toLowerCase().substring(1) === "avatar") {
//       message.reply("I do not have that power yet, or maybe ever sorry")
    
//     }}
// });





//console.log(commands)
//the emoji reasction stuff  temp


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

// client.on('messageReactionRemove', async (reaction, user) => {
// 	if (reaction.message.partial) {
// 		try {
// 			await reaction.message.fetch();
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message: ', error);
// 		}
// 	}

// 	console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
// });


client.login(process.env.DISCORD_TOKEN_ENV);
