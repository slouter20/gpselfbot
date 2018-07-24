const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**Selam** "${member.user.username}"\n **Sunucumuza Senide Davet Etmek İsterim**https://discord.io/GangstasParadise\n');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('Mase');

});

bot.login(process.env.BOT_TOKEN);
