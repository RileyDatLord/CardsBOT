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
const createEmbed = require("embed-creator")
var Discord = require("discord.js")
const inspect = require("util").inspect;
const moment = require("moment");
var bot = new Discord.Client()
var client = new Discord.Client()
const music = require('discord.js-music-v11');
var prefix = "<"


bot.on("message", msg => {
  if(msg.content.startsWith("<rip")) {
    var args = msg.content.slice(1 + 4)

    if(args === "") {
      msg.channel.sendMessage('please add text after\"<rip" please!')

    } else {
      msg.channel.sendMessage("**RIP** " + args)

    }

    

  }


})

bot.on("message", msg => {
  if (msg.content.startsWith("<stats"))  {
    
    var uptime = bot.uptime / 1000
    var versions = process.versions
    var mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
    msg.channel.sendMessage("```• Uptime > " + uptime + " seconds\n• Mem Usage > " + mem + "\n• Discord.js version > " + Discord.version + "\n• Node version > " + process.version + "```")
  }
})
bot.on("message", msg => {
    if (msg.content.startsWith("<vol")  || msg.content.startsWith("<volume")) {
      msg.channel.sendMessage("http://i.imgur.com/qgKJYwW.gifv is how to change the volume!")
      
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<vol" or "<volume"! (${msg.guild.name})`)
      }
    }); 
bot.on("message", msg => {
    if (msg.content.startsWith("<idea")) {
      var argsIdea = msg.content.slice(1 + 5);
      console.log(argsIdea + "\nIdea by: " + msg.author.username);
      msg.channel.sendMessage("Sent the idea to the console. thanks!")
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} has sent a idea to the console! (${msg.guild.name})`)
      }
    });
bot.on("message", msg => {
    if (msg.content.startsWith("<ann")) {
      if (msg.author.id == "240310996390903808") {
                msg.delete();
                var msg = msg.content.slice( 1 + 3)
                for (g of bot.guilds.values()) {
                g.defaultChannel.send("**BOT Announcement!**\n" + msg);
                }

                

        } else  {
        msg.author.sendMessage("You are not my creator!");
        msg.delete();
        
      }

      }
    });
bot.on("message", msg => {
    if (msg.content.startsWith("<off")) {
      if (msg.author.id == "240310996390903808") {
                msg.channel.sendMessage('Logging off...')
                
                setInterval(function()  {
                bot.destroy();
              }, 500)
                setInterval(function()  {
                console.log("Shut all the way down!")
              }, 999)
                setInterval(function()  {
                process.exit();
                }, 1000)
                msg.delete();
                


        } else  {
        msg.author.sendMessage("You are not my creator!");
        msg.delete();
        bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted shutting off the bot but failed (${msg.guild.name})`)
      }

      }
    });

bot.on("guildMemberRemove", member =>  {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("Bye bye " + member.user + " :(")
  bot.user.setGame(`with ${bot.users.size} users | <help`)
  bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${member.user} has left ${member.guild}`)

});
bot.on("guildMemberAdd", member =>  {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("Welcome " + member.user + " to the server!")
  bot.user.setGame(`with ${bot.users.size} users | <help`)
  bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${member.user} has joined ${member.guild}`)


});
bot.on("guildDelete", guild =>  {

    bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`I have been removed from ${guild.name}!`)
})
bot.on("guildCreate", guild =>  {

    bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`I have been added to ${guild.name}!`)
})
bot.on("message", msg => {
    if (msg.content.startsWith("<unmute")) {
      let muteMember = msg.guild.member(msg.mentions.users.first());
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<unmute" (${msg.guild.name})`)
if (muteMember) {
      if (msg.member.hasPermission("MUTE_MEMBERS")) {
                if(msg.guild.member(bot.user).hasPermission("MUTE_MEMBERS"))  {
                  msg.channel.sendMessage("Successfully unmuted " + muteMember)
                  muteMember.setMute(false);

                }
                

        } else  {
        msg.channel.sendMessage("Either I dont have permission or you dont! (MUTE_MEMBERS)");
        msg.delete();
      }


} else  {
  msg.reply("Specify a valid user!")
  msg.delete();
}


      }


      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<mute")) {
      let muteMember = msg.guild.member(msg.mentions.users.first());
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<mute" (${msg.guild.name})`)
if (muteMember) {
      if (msg.member.hasPermission("MUTE_MEMBERS")) {
                if(msg.guild.member(bot.user).hasPermission("MUTE_MEMBERS"))  {
                  msg.reply("Successfully muted " + muteMember)
                  muteMember.setMute(true);

                }
                

        } else  {
        msg.reply("Either I dont have permission or you dont! (MUTE_MEMBERS)");
        msg.delete();
      }


} else  {
  msg.reply("Specify a valid user!")
  msg.delete();
}


      }


      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<undeafen")) {
      let banMember = msg.guild.member(msg.mentions.users.first());
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<undeafen" (${msg.guild.name})`)
if (banMember) {
      if (msg.member.hasPermission("DEAFEN_MEMBERS")) {
                if(msg.guild.member(bot.user).hasPermission("DEAFEN_MEMBERS"))  {
                  msg.reply("Successfully undeafened " + banMember)
                  banMember.setDeaf(false);

                }
                

        } else  {
        msg.reply("Either I dont have permission or you dont! (DEAFEN_MEMBERS)");
        msg.delete();
      }


} else  {
  msg.reply("Specify a valid user!")
  msg.delete();
}


      }


      }
    );
bot.on('message', message => {
  const prefix = "<";
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval") && message.author.id == "240310996390903808") {
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
});
bot.on("message", msg => {
    if (msg.content.startsWith("<deafen")) {
      let banMember = msg.guild.member(msg.mentions.users.first());
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<deafen" (${msg.guild.name})`)
if (banMember) {
      if (msg.member.hasPermission("DEAFEN_MEMBERS")) {
                if(msg.guild.member(bot.user).hasPermission("DEAFEN_MEMBERS"))  {
                  msg.reply("Successfully deafened " + banMember)
                  banMember.setDeaf(true);

                }
                

        } else  {
        msg.reply("Either I dont have permission or you dont! (DEAFEN_MEMBERS)");
        msg.delete();
      }


} else  {
  msg.reply("Specify a valid user!")
  msg.delete();
}


      }


      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<ban")) {
      let banMember = msg.guild.member(msg.mentions.users.first());
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<ban" (${msg.guild.name})`)
if (banMember) {
      if (msg.member.hasPermission("BAN_MEMBERS")) {
                if(msg.guild.member(bot.user).hasPermission("BAN_MEMBERS"))  {
                  msg.reply("Successfully banned " + banMember)
                  banMember.ban();

                }
                

        } else  {
        msg.reply("Either I dont have permission or you dont! (BAN_MEMBERS)");
        msg.delete();
      }


} else  {
  msg.reply("Specify a valid user!")
  msg.delete();
}


      }


      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<kick")) {
      let kickMember = msg.guild.member(msg.mentions.users.first());
      bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<kick" (${msg.guild.name})`)
if (kickMember) {
      if (msg.member.hasPermission("KICK_MEMBERS")) {
                if(msg.guild.member(bot.user).hasPermission("KICK_MEMBERS"))  {
                  msg.reply("Successfully kicked " + kickMember)
                  kickMember.kick();

                }
                

        } else  {
        msg.channel.sendMessage("Either I dont have permission or you dont! (KICK_MEMBERS)");
        msg.delete();
      }


} else  {
  msg.reply("Specify a valid user!")
  msg.delete();
}


      }


      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<anonsay")) {
      if (msg.member.hasPermission("ADMINISTRATOR") || msg.member.id == "240310996390903808") {
                msg.channel.sendMessage(msg.content.slice(1 + 7));
                msg.delete();
                bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} Attempted "<anonsay" (${msg.guild.name})`)
                bot.users.get('240310996390903808').send(`${msg.author.username} - Typed "${msg.content.slice(1 + 7)}"`)

        } else  {
        msg.author.sendMessage("You do not have permission!");
        msg.delete();
      }

      }
    });
bot.on("message", msg => {
    if (msg.content.startsWith("<setgame")) {
      if (msg.member.id == "240310996390903808") {
        var icon = "https://cdn.pixabay.com/photo/2014/04/03/10/11/exclamation-mark-310101_960_720.png"
        var game = msg.content.slice(1 + 7);
        if(msg.content.endsWith("guild"))  {
          msg.reply("You set it to guild which means you set it to the guild count!")
          var game = `with ${bot.guilds.size} guilds | <help`
        };
        if(msg.content.endsWith("main"))  {
          msg.reply("You set it to main which means you set it to the user count!")
          var game = `with ${bot.users.size} users | <help`
        };
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor("Set Game", icon)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter(msg.author.username, '')
  .setImage('')
  .setThumbnail(icon)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField("Game set to: **" + game + "**", '\u200b', true)

  msg.channel.sendEmbed(embed);
  bot.user.setGame(game)
  msg.delete();


        } else  {
        msg.author.sendMessage("You do not have permission!");
        msg.delete();
        bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<setgame" (${msg.guild.name})`)
      }

        }
      }
);
bot.on("message", msg => {
    if (msg.content.startsWith("<anonembedsay")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<anonembedsay" (${msg.guild.name})`)
      if (msg.member.hasPermission("ADMINISTRATOR") || msg.member.id == "240310996390903808") {
        var icon = "https://cdn.pixabay.com/photo/2014/04/03/10/11/exclamation-mark-310101_960_720.png"
        var say = msg.content.slice(1 + 12)
        if (say.length > 256) {
          msg.channel.sendMessage("Please use 256 letters and numbers or less!")
        } else  {
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor("Cards", icon)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('Cards', '')
  .setImage('')
  .setThumbnail(icon)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField(say, '\u200b', true)

  msg.channel.sendEmbed(embed);
        }
        bot.users.get('240310996390903808').send(`${msg.author.username} - Typed "${msg.content.slice(1+ 13)}"`)

  msg.delete();


        } else  {
        msg.author.sendMessage("You do not have permission!");
        msg.delete();
      }

        }
      }
);
bot.on("message", msg => {
    if (msg.content.startsWith("<say")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<say" (${msg.guild.name})`)
      if (msg.member.hasPermission("MANAGE_MESSAGES")) {
                msg.channel.sendMessage(msg.content.slice(1 + 3) + '\n**<say | Executed by ' + msg.author.username + '**');
                msg.delete();


        } else  {
        msg.author.sendMessage("You are not my creator!");
        msg.delete();
      }

      }
    });
bot.on("message", msg => {
    if (msg.content.startsWith("<embedsay")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<embedsay" (${msg.guild.name})`)
      if (msg.member.hasPermission("MANAGE_MESSAGES")) {
        var icon = msg.author.avatarURL
        var say = msg.content.slice(1 + 8)
        if (say.length > 256) {
          msg.channel.sendMessage("Please use 256 letters and numbers or less!")
        } else  {
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor("Cards", icon)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('Cards', '')
  .setImage('')
  .setThumbnail(icon)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField(say, '\u200b', true)

  msg.channel.sendEmbed(embed);
        }
  msg.delete();


        } else  {
        msg.author.sendMessage("You do not have permission!");
        msg.delete();
      }

        }
      }
);
bot.on("message", msg => {
    if (msg.content.startsWith("<kill")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<kill" (${msg.guild.name})`)
        msg.delete();
        var icon = bot.user.avatarURL
  

msg.channel.sendMessage(`**${msg.author}** has killed **${msg.content.slice(1 + 5)}**`);
        }
      }
    ); 
bot.on("message", msg => {
    if (msg.content.startsWith("<info bot")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<info bot" (${msg.guild.name})`)
        msg.delete();
        var icon = bot.user.avatarURL
        if(afkchan = "null") {
          var afkchan = "None"

        }
        const embed = new Discord.RichEmbed()
  
  .setTitle('')
  .setAuthor("Card's info", bot.user.avatarURL)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('<info bot | Executed by ' + msg.author.username, '')
  .setImage('')
  .setThumbnail(bot.user.avatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField('Version:', '1.3', true)
  .addField('Coded with languge:', 'JavaScript', true)
  /*
   * Blank field, useful to create some space.
   */
   .addField('Coded with program:', 'Visual Studio Code', true)
   .addField('Made by:', 'ReportCards', true)

  .addField('Created On:', bot.user.createdAt, true)
  .addField('ID:', bot.user.id, true)
  

  msg.channel.sendEmbed(embed);
        }
      }
    );     
bot.on("message", msg => {
    if (msg.content.startsWith("<info guild")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<info guild" (${msg.guild.name})`)
        msg.delete();
        var icon = msg.guild.iconURL;
        var name = msg.guild.name;
        var defaultChan = msg.guild.defaultChannel;
        var role = msg.guild.roles.size
        var created = msg.guild.createdAt;
        var id = msg.guild.id;
        var timeout = msg.guild.afkTimeout;
        var afkchan = msg.guild.afkChannelID
        var members = msg.guild.memberCount;
        if(afkchan = "null") {
          var afkchan = "None"
        }
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor("Server " + name + "'s info", icon)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('<info guild | Executed by ' + msg.author.username, '')
  .setImage('')
  .setThumbnail(icon)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField('Guild Name:', '\\' + name, true)
  .addField('AFK Timeout:', timeout, true)
  /*
   * Blank field, useful to create some space.
   */
   .addField('AFK Channel ID:', afkchan, true)
   .addField('Member Count:', members, true)

  .addField('Default Channel:', defaultChan, true)
  .addField('Roles:', role)

  .addField('Created On:', created, true)
  .addField('Guild ID:', id, true)
  

  msg.channel.sendEmbed(embed);
        }
      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<info me")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<info me" (${msg.guild.name})`)
        msg.delete();
        var userAv = msg.author.avatarURL
        var name = msg.author.username
        var joined = msg.member.joinedAt
        var role = msg.member.highestRole
        var created = msg.author.createdAt
        var id = msg.author.id
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor(msg.author.username + "'s info", userAv)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('<info me', '')
  .setImage('')
  .setThumbnail(userAv)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField('Author Name:', name, true)
  /*
   * Blank field, useful to create some space.
   */
  .addField('Joined at:', joined, true)
  .addField('Highest Role:', role)

  .addField('Created On:', created, true)
  .addField('User ID:', id, true)
  

  msg.channel.sendEmbed(embed);
        }
      }
    );
    bot.on("message", msg => {
    if (msg.content.startsWith("<donkeytrash")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<donkeytrash" (${msg.guild.name})`)
        msg.delete();
        msg.channel.sendMessage("https://cdn.discordapp.com/attachments/285257270902784000/285305550013595658/Kong_is_trash.jpg");
        
        }
      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<info other")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<info me" (${msg.guild.name})`)
        msg.delete();
        let other = msg.guild.member(msg.mentions.users.first());
        var userAv = other.user.avatarURL
        var name = other.user.username
        var joined = other.joinedAt
        var role = other.highestRole
        var created = other.user.createdAt
        var id = other.user.id
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor(name + "'s info", userAv)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('<info other ' + other, '')
  .setImage('')
  .setThumbnail(userAv)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField('Author Name:', name, true)
  /*
   * Blank field, useful to create some space.
   */
  .addField('Joined at:', joined, true)
  .addField('Highest Role:', role)

  .addField('Created On:', created, true)
  .addField('User ID:', id, true)
  

  msg.channel.sendEmbed(embed);
        }
      }
    );
    bot.on("message", msg => {
    if (msg.content.startsWith("<donkeytrash")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<donkeytrash" (${msg.guild.name})`)
        msg.delete();
        msg.channel.sendMessage("https://cdn.discordapp.com/attachments/285257270902784000/285305550013595658/Kong_is_trash.jpg");
        
        }
      }
    );
bot.on("message", msg => {
    if (msg.content.includes("@Cards" || "@ReportCards")) {
        msg.delete();
        msg.channel.sendFile("C:\Users\Person\Desktop\Kong_is_trash.jpg");
        
        }
      }
    );
bot.on("message", msg => {
    if (msg.content.endsWith("<info")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<info" (${msg.guild.name})`)
        msg.delete();
        msg.channel.sendMessage(msg.author.username + ` <info <me, guild, bot>!`);
        
        }
      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<invite")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<invite" (${msg.guild.name})`)
        msg.delete();
        msg.channel.sendMessage(msg.author.username + ` You have been messaged the invite code!`);
        msg.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=282623746718695435&scope=bot&permissions=9999")
        }
      }
    );
bot.on("message", msg => {
    if (msg.content.startsWith("<help")) {
              bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage(`${msg.author.username} attempted "<help" (${msg.guild.name})`)
        msg.delete();
        const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor("Commands", bot.user.avatarURL)
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('')
  .setFooter('<help | Executed by: ' + msg.author.username, '')
  .setImage()
  .setThumbnail()
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL('')
  .addField('Main commands:', '<help - Shows this text!\n<info <guild, me, bot, other {mention}> - Shows info for the specified args.\n<donkeytrash - Donkey Kong... in a trash bin\n<idea (args) - Send an idea to the console!\n<kill {arguments} - Sais you killed the thing you specify!', true)
  /*
   * Blank field, useful to create some space.
   */
.addField('Music commands:', '<play (search / url) - Queue a song!\n<skip - Skips the current song (Must have permission or must of queued the current song)\n<queue - Shows the current queue!\n<volume - How to change the volume!\n<leave - Leaves the voice channel clearing the queue with it.')


  .addField('Permission-Needed Commands:', "<say <args> - Sais the specified message! (MANAGE_MESSAGES)\n<embedsay <args> - Sais the specified message in an embed! (MANAGE_MESSAGES)\n<anonsay - Sais specified message anonymously! (ADMINISTRATOR)\n<anonsay - Sais specified message anonymously in embed! (ADMINISTRATOR)\n<kick - Kicks the specified mentioned person! (KICK_MEMBERS)\n<ban - Bans the specified mentions person! (BAN_MEMBERS)\n<mute - Mute a specific player for talking in voice channel (MUTE_MEMBERS)\n<unmute - Unmute a player and allow him to talk! (MUTE_MEMBERS)\n<deafen - Make someone not be able to hear or talk I KNOW SCARY! (DEAFEN_MEMBERS)\n<undeafen - Make it so someone can hear and talk again! (DEAFEN_MEMBERS)", true)


  .addField("ReportCard's Commands:\n", "<off - Turns off the bot!\n<setgame - Changes the game", true)
  msg.channel.sendMessage("**"+ msg.author.username + "** I sent you a message with the commands! :rotating_light:")
msg.author.sendEmbed(embed);
        }
          
 
      }
    );
music(bot, {
	prefix: '<',     // Prefix of '-'.
	global: false,   // Server-specific queues.
	maxQueueSize: 10, // Maximum queue size of 10.
	volume: 75, // Default volume
  clearInvoker: false // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
});

bot.on('ready', () => {
  var channels = bot.guilds.size;
  bot.users.get("240310996390903808").addFriend()
  console.log('Started the bot! ' + channels + ' Are the amount of guilds with the bot!\nUsers: ' + bot.users.size);
  bot.user.setGame(`with ${bot.users.size} users | <help`)
  bot.guilds.get("292052310333325324").channels.get("292052954066976769").sendMessage("Started up the bot fully!")
});

bot.login("MjgyNjIzNzQ2NzE4Njk1NDM1.C7oyOg.hAv8Cjjwp4L4-aG2Rp-O_PGIhpk");
