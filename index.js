
// Variables and others //

var Discord = require("discord.js")
const moment = require("moment");
var bot = new Discord.Client()
var client = new Discord.Client()
const music = require('discord.js-music-v11');
var prefix = "<"
bot.login("token")

// Events //


//Join Event

bot.on("guildMemberAdd", member =>  {
    let guild = member.guild
    let guildname = guild.name
    let user = member.displayName
    guild.defaultChannel.sendMessage(`Please welcome to ${guildname}, ${user}!`)
    console.log(`User ${user} has joined ${guildname}.`)
})

//Leave event

bot.on("guildMemberRemove", member =>  {
    let guild = member.guild
    let guildname = guild.name
    let user = member.displayName
    guild.defaultChannel.sendMessage(`Please welcome to ${guildname}, ${user}!`)
    console.log(`User ${user} has joined ${guildname}.`)
})

//Join new guild event

bot.on("guildCreate", guild =>  {
    guild.defaultChannel("--------------------\nThanks for adding Cards!\nPlease use <help to view my commands!\n--------------------")
    console.log(`Joined ${guild}!`)
})

//Leave guild event

bot.on("guildDelete", guild =>  {
    console.log(`Left ${guild}!`)
})

// Functions //

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

// Commands //


bot.on("message", message =>    {   
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
// Help command
    if (message.content.startsWith(prefix + "help"))    {
        message.react("credit_card")
        message.author.sendMessage("```General Commands:\nNone as of yet :/```")
        message.author.sendMessage("```Owner commands:\n<eval - Eval some code!\n<stop - Shutdown the bot```")
    }
// Eval command
     if (message.content.startsWith(prefix + "eval")) {
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
// Shutdown command
    if (message.content.startsWith(prefix + "stop"))    {
        if (message.author.id == "240310996390903808")  {
            setInterval(function()  {
                process.exit()
            }, 1500)
            setInterval(function()  {
                bot.destroy()
            }, 1000)
            message.channel.sendMessage("`Shutting down bot!`")
        }

    }
    const suits = ["♠️", "♦", "♥️", "♠️"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Card command
    if (message.content.startsWith(prefix + "card")) {
    const numCards = message.content.slice(1 + 5);
    const lines = [];
  

     for (let i = 0; i < numCards; ++i) {
        lines.push(`**${ranks[Math.floor(Math.random() * ranks.length)]}**${suits[Math.floor(Math.random() * suits.length)]}`);
      }

      msg.channel.sendMessage(lines.join(", "));
        }

})

// Music //
music(bot, {
	prefix: '<',     // Prefix of '-'.
	global: false,   // Server-specific queues.
	maxQueueSize: 10, // Maximum queue size of 10.
	clearInvoker: false // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
});
// Config "discord.js-music-v11" npm to 
// be able to change some messages and add / remove 
//commands to the bot. Including the prefix needing 
//to be changed from the npm