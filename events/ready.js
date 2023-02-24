require('dotenv').config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");



module.exports = {
    name: "ready",
    // once sets it to only run one time (because event handler will see .once and do event.once)
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
              // this would set bot globally on all servers it is in
              // I do not know how to even run this part honestly
              if (process.env.ENV === "production") {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                  body: commands
                });
                console.log("Sucessfully register commands globally")
              } else {
                // since this takes guild ID, the bot will only run in that one server.
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