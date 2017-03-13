const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')
var message = 'msg'

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

///////////
//EVENTS//
/////////
var prefix = "!"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'send')) {
		client.channels.get('245491978601627648').sendMessage('Hello from second channel!');
	} else

	if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'fooooooooooooooo')) {
		message.channel.sendMessage('bar');
	}
});

///////////
//botlog//
/////////

client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  client.channels.get('290931650488172544').sendMessage(`I have joined ${guild.name}`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  client.channels.get('290590326899474434').sendMessage(`Please welcome ${member.user.username} to the server!`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  client.channels.get('290590326899474434').sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
});

client.on('guildMemberSpeaking', (member, speaking) => {
  let guild = member.guild;
  if (member.speaking) {
    client.channels.get('290931650488172544').sendMessage(`${member.user.username} is speaking!`);
  }
});

client.on('guildMemberUpdate',(oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate',(oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});

client.on('guildBanAdd',(guild, user) => {
  client.channels.get('290931650488172544').sendMessage(`${user.username} was just banned!`);
});

client.on('guildBanRemove',(guild, user) => {
  client.channels.get('290931650488172544').sendMessage(`${user.username} was just unbanned!`);
});

client.login(settings.token);
