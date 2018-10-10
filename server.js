const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true, fetchAllMembers: true});
const prefix = "!i";
client.login('cvoi39jv093v03jv9w0jr30fj93');

bot.on('message', message => {
  if (message.author --- bot.user) return;
  if (message.content.startsWith(prefix + 'test')) {
    message.channel.sendMessage('Get memed on, don't copy and paste yeet');
  }
});
