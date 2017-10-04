const Discord = require('discord.js');
const client = new Discord.Client()
const config = require('./config.json');

 // Bot user status
function setGame() {
    var games = [
        "TB.help | Version 0.5"
    ]

    client.user.setPresence({
        status: 'online',
        afk: false,
        game: {
            type: 0,
            name: games[Math.floor(Math.random() * games.length)]
        }
    })
}

var prefix = config.prefix
var ver = config.version

client.login(config.bot_token);

// Bot ready
client.on("ready", () => {
    console.log(`=======================================\n`,
                `=======================================\n`,
				`TBot Ready and Online Active`);
    
    setGame();
    client.setInterval(setGame, 200000);
})
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find('name', 'welcomes');
		if (!channel) return;
		message.send(`Before You Start Having Fun On This Server Please Read The Rules on the server, ${member}`);
})
client.on("message", function(message) {

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;
	    
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
		 //ping command
        case "ping":
            message.channel.send("Pong! Response Time :ping_pong: " + client.ping + "mms");
            break;

			case "help":
			var embed = new Discord.RichEmbed()
                .setAuthor("TBot Help Guide", "https://cdn.discordapp.com/attachments/360361112782241792/363907149224738816/Help-icon.png?width=250&height=250")
                .setDescription("My prefix is TB.")
                .addField("- General Commands", "purge, Ping")
				.addField("- T Stuff", "server , website , information ,  update-log , ver")
				.addField("- Fun Commands", "avatar , icon , joke")
                .addField("- Music Commands", "play , skip , stop , vol , resume , pause")
				.addField("- Bot Owner Only", "say , embedsay")
                .setColor("#03ff95")  
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
                .setTimestamp()  
           message.author.send({embed});
		   
		   var embed = new Discord.RichEmbed()
                .setAuthor("Help Guide", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
                .setDescription("I sent you a DM with all my commands")
                .setColor("#03ff95")  
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
                .setTimestamp()  
           message.channel.send({embed});
  break;
		case "server":
			message.channel.send("Here is my server invite link! https://discord.gg/FQs8eRw");
			break;
			
			case "update-log":
			message.channel.send("**Verson is 1.0**\n Added Music Commands and say commands");
			break;
	case "purge":
  const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});

break;
case "ver":
message.channel.send("The Bot Version " + ver)
break;
case "say":
		   try {
                       if(message.author.id !== "338842973972201472") return;
					if(message.content.length < prefix.length + 4) {
                        message.channel.send("You have to say something")
                        break
                    } else { 
							message.channel.send(message.content.replace(prefix + "say ", ''));
					message.delete();
							}
					} catch(err) {
						message.channel.send(error)
					}
            break;
			case "avatar":
		 if (message.mentions.users.first()) {
            	var mentionmembers = message.mentions.members.first()
            	var mentionusers = message.mentions.users.first()
            	var embed = new Discord.RichEmbed()
                    .setImage(mentionusers.displayAvatarURL)
					.setColor("#fcff00")
            	message.channel.send({embed})
            } else {
                var embed = new Discord.RichEmbed()
                    .setImage(message.author.displayAvatarURL)
					.setColor("#fcff00")
                message.channel.send({embed})
            }
            break;
			case "icon":
			        var embed = new Discord.RichEmbed()
                    .setImage(message.guild.iconURL)
                    .setColor("#fcff00")
                message.channel.send({embed})
                break;
		case "website":
         message.channel.send ("check out my website here https://sites.google.com/view/tbot/");			
            break;
			case "joke":
			if(message.content.length < prefix.length + 6) {
                message.channel.send("type (t-joke !) to grab a joke from me")
                break;
            }  else {        
                var choices = ["I dont know a joke to say to you right now", "T-BOT= Tysons Battle of Trees", "WHAT I DONT DO JOKES CAUSE IM AM MAN not funny", "why are you asking me ask ChromeBot","DabCentral is awesome **not** **dab central is not a discord server** ___yet___"]
                var rand = choices[Math.floor(Math.random() * choices.length)];                    
                message.reply(rand)  
			}
                break;
			case "information":
				var embed = new Discord.RichEmbed()
                .setAuthor("Information", "https://cdn.discordapp.com/attachments/360361112782241792/363913006716813332/Button-Info-icon.png?width=250&height=250")
                .setDescription("This information command will tell you all the information you need about T-BOT")
                .addField("Bot Creators/Helpers", "Kaiss-Fixing Errors in the bot\nTyson-Making and developng the Bot\nChromeBot-for Being a great bot")
                .addField("Why was this bot made and when was this bot made", "This bot was made on the 4th of September 2017 the bot was made because i have always wanted to code a great standing public bot and becuase i love coding discord bots")
                .setColor("#03ffee") 
               message.channel.send({embed});	
                 break;
				 case "embedsay":
                 if(message.author.id !== "338842973972201472") return;
		   if (message.content.length < config.prefix.length + 9) {
                message.channel.send("Please Say Something");
            } else { 
                var embed = new Discord.RichEmbed()
                .setAuthor("T-BOT say", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
                .setDescription(message.content.replace(config.prefix + "embedsay ", ''))
                .setColor("#00ffc5")
            message.delete();
            message.channel.send({embed});
            break;
}
}
})