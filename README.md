# Sumi Bot 3.0 by Andrew Furrer

This Discord bot is a simple implementation built using the Discord API and `discord.js` library. It accepts text commands to perform various functions in a Discord server. And also being my first project I did outside of Thinkful

## Features

Current Commands:

+ !ping (the first command, bot responds with pong)
+ !avatar (gets user's avatar by default and has optional param of getting a different user's avatar)
+ !sleep (posts a funny image I am obsessed with)
+ !info (with required params of server or user. Replying with simple information about the selected query)

## Installation and Setup

1. Clone this repo onto your local machine
2. Create a new Discord application and add a bot user to it. Refer to the [Discord API documentation](https://discord.com/developers/docs/intro) for detailed instructions.
3. Create a `.env` file in root folder and then copy the bot token from the Discord developer portal and paste it into the `.env` file with a variable called `DISCORD_TOKEN_ENV`.
4. Invite the bot to the server of your choosing
5. One your IDE run `npm install` and then `npm run dev` to start

## Usage

To use the bot, simply enter one of the available text commands prefixed with `!` in any channel where the bot is present. The bot will respond with the appropriate information or perform the requested action.