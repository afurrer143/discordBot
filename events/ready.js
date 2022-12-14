require('dotenv').config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");



module.exports = {
    name: "ready",
    once: true,
    execute (client, commands) {
        console.log(`Logged in as ${client.user.tag}!`);

        //the next parts...no clue what they do I believe it is something like sending my slash commands to discord server. Something about whether globablly or locally tho
        //I think locally means for my "guild ID" server but mannn
        const CLIENT_ID = client.user.id;
        const rest = new REST({
          version: "9"
        }).setToken(process.env.DISCORD_TOKEN_ENV);
        (async () => {
            try {
              if (process.env.ENV === "production") {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                  body: commands
                });
                console.log("Sucessfully register commands globally")
              } else {
                  await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                    body: commands
                  });
                  console.log("Sucessfully register commands locally")
              }
            } catch (err) {
              if (err) console.error(err);
            }
        })();
    }
}