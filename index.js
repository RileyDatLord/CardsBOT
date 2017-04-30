/*
Main commands:
<help - Shows this text!
<info <guild, me, bot> - Shows info for the specified args.
<donkeytrash - Donkey Kong... in a trash bin
<idea (args) - Send an idea to the console!
Permission-Needed Commands:
<say <args> - Sais the specified message! (MANAGE_MESSAGES)
<embedsay <args> - Sais the specified message in an embed! (MANAGE_MESSAGES)
<anonsay - Sais specified message anonymously! (ADMINISTRATOR)
<anonsay - Sais specified message anonymously in embed! (ADMINISTRATOR)
<kick - Kicks the specified mentioned person! (KICK_MEMBERS)
<ban - Bans the specified mentions person! (BAN_MEMBERS)
ReportCard's Commands:
<off - Turns off the bot!
<setgame - Changes the game
*/

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
var Discord = require("discord.js")
const moment = require("moment");
var bot = new Discord.Client()
var client = new Discord.Client()
const music = require('discord.js-music-v11');
var prefix = "<"


// Events //



// Functions //



// Commands //