
// Variables and others //

var Discord = require("discord.js")
const moment = require("moment");
var bot = new Discord.Client()
var client = new Discord.Client()
const music = require('discord.js-music-v11');
var prefix = "<"


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



// Commands //

bot.on("message", message =>    {   
    if (msg.author.bot) return;
    if (msg.channel.type !== 'text') return;


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

})

// Music //
music(client);
// Config "discord.js-music-v11" npm to 
// be able to change some messages and add / remove 
//commands to the bot. Including the prefix needing 
//to be changed from the npm