const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**:fire::rose: Selam Güzel İnsan :rose::fire:**\n **:fire: Sıcak Bir Aile Ortamının Vede Eğlencenin Olduğu Bir Sunucuya Ne Dersiniz.:fire:**\n **:rose: Oyun, Sohbet, Eğlence, Müziğin Olduğu Her Şey Bu Sunucuda :rose:**\n **:fire: Bizi Diğerlerinden Farklı Kılan Şey Korunmanız. Hiç Bir Şekilde Saldırı Gerçekleştirilemeyen Bir Sunucu Yarattık. :fire:**\n **:rose: 7/24 Açık Yetkililerimiz Vardır. Siz Farkında Olmasanız Bile Birileri Sizleri İzliyor Olacak :rose:**\n **:fire: Seni De Bu Ortamda Görmekten Mutluluk Duyarız. :fire:**\n **:rose: Sunucu Davet Linki; https://discord.gg/6ZgPARX :rose:**\n ');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
    member.send('**:fire::rose: Selam Güzel İnsan :rose::fire:**\n **:fire: Sıcak Bir Aile Ortamının Vede Eğlencenin Olduğu Bir Sunucuya Ne Dersiniz.:fire:**\n **:rose: Oyun, Sohbet, Eğlence, Müziğin Olduğu Her Şey Bu Sunucuda :rose:**\n **:fire: Bizi Diğerlerinden Farklı Kılan Şey Korunmanız. Hiç Bir Şekilde Saldırı Gerçekleştirilemeyen Bir Sunucu Yarattık. :fire:**\n **:rose: 7/24 Açık Yetkililerimiz Vardır. Siz Farkında Olmasanız Bile Birileri Sizleri İzliyor Olacak :rose:**\n **:fire: Seni De Bu Ortamda Görmekten Mutluluk Duyarız. :fire:**\n **:rose: Sunucu Davet Linki; https://discord.gg/6ZgPARX :rose:**\n ');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

   
});



bot.on('ready',()=> {
console.log('Mase');

});

bot.login(process.env.BOT_TOKEN);
