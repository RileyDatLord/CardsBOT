
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

// Eval command
     if (message.content.toLowerCase == prefix + "eval") {
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
    if (message.content.toLowerCase == prefix + "stop")    {
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
    if (message.content.toLowerCase == prefix + "card") {

    }

})

// Music //
music(bot, {
	prefix: '-',     // Prefix of '-'.
	global: false,   // Server-specific queues.
	maxQueueSize: 10, // Maximum queue size of 10.
	clearInvoker: true // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
});
// Config "discord.js-music-v11" npm to 
// be able to change some messages and add / remove 
//commands to the bot. Including the prefix needing 
//to be changed from the npm