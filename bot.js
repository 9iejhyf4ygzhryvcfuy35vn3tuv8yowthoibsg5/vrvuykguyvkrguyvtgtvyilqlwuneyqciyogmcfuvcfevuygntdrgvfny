const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const eris = require('eris');

client.on('ready', () => {
  console.log('System Bot');
});

client.on('ready', async () => {
   client.user.setActivity("Renex System,", {type: "Playing"})
   client.user.setStatus('DND')
});

client.on("ready", async  => {
setInterval(function(){

client.channels.find('id', '471851516832251905').setName("W");
client.channels.find('id', '471851516832251905').setName("We");
client.channels.find('id', '471851516832251905').setName("Wel");
client.channels.find('id', '471851516832251905').setName("Welc");
client.channels.find('id', '471851516832251905').setName("Welco");
client.channels.find('id', '471851516832251905').setName("Welcom");
client.channels.find('id', '471851516832251905').setName("Welcome");
client.channels.find('id', '471851516832251905').setName("Welcome T");
client.channels.find('id', '471851516832251905').setName("Welcome To");
client.channels.find('id', '471851516832251905').setName("Welcome To R");
client.channels.find('id', '471851516832251905').setName("Welcome To Re");
client.channels.find('id', '471851516832251905').setName("Welcome To Ren");
client.channels.find('id', '471851516832251905').setName("Welcome To Rene");
client.channels.find('id', '471851516832251905').setName("Welcome To Renex");
client.channels.find('id', '471851516832251905').setName("Welcome To Renex.");


}, 6000);
});

client.on('voiceStateUpdate', (Codes, ReBeL) => {
let channel3 = ["471861672810774559"];
client.channels.get(channel3)
ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "RENEX")).then(r => {
});
console.log("Done");
});
client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "471861672810774559") return console.log("Erorr");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
console.log("Done");
let scan = setInterval(()=>{
rebeeel.delete();
}, 305);
});
});
});

client.on('voiceStateUpdate', (old, now) => {
const channel = client.channels.get('471869811974995970');
const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
const size = channel.name.match(/\[\s(\d+)\s\]/);
if (!size) return channel.setName(` . المتوآجدين بالرومآت الصوتيهه ${currentSize} `);
if (currentSize !== size) channel.setName(` . المتوآجدين بالرومآت الصوتيهه ${currentSize} `);
});
client.on('messageUpdate', (oldRebel, newRebel) => {
if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
{
console.log(newRebel.author.name + " - " + newRebel);
newRebel.delete().catch(O_o=>{}); 
}
});

client.on('message', message => {
if (message.content.startsWith("رابط")) {
if(!message.channel.guild) return;
message.channel.createInvite({
thing: true,
maxUses: 25,
maxAge: 86400
}).then(invite =>
message.author.sendMessage(invite.url),2000
)
message.channel.send(`** تم أرسال الرابط برسالة خاصة 
<@${message.author.id}>**`)
message.author.send(`**
مدة الرابط : يـوم **
** عدد استخدامات الرابط : 25 


**
`)
}
});

client.on('message', message => {
let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
if(message.channel.id !== "471966277196578818") return;
const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`لايوجد لون بهذا الرقم`)
.setColor(`ff0000`)
if(!isNaN(args) && args.length > 0)
if(!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
var a = message.guild.roles.find("name",`${args}`)
if(!a)return;
const embed = new Discord.RichEmbed()                    
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`تم تغيير اللون بنجاح`)
.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
if (!args)return;
setInterval(function(){})
let count = 0;
let ecount = 0;
for(let x = 1; x < 201; x++){
message.member.removeRole(message.guild.roles.find("name",`${x}`))
}
message.member.addRole(message.guild.roles.find("name",`${args}`));
}
});

client.login(process.env.BOT_TOKEN);
