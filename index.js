const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const keepAlive = require('./server')

// bot prefix
const prefix = "!!";

client.on("ready", () => {
  console.log(`The bot is working properly, no errors occurred.
`)
  console.log(`Prefix: ${prefix}`)
  console.log(`https://dsc.gg/logistack/`)
  client.user.setActivity({ type: "WATCHING", name: `https://dsc.gg/logistack/` });
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'dm')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply('You do not have permission to use this bot.')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] successful message | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] O member may have DM's disabled or Bot Fell | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] Successfully.`)
      message.channel.send(`:white_check_mark: | **All messages sent successfully.**`).then(message.delete({ timeout: 15000 }));
    }
  }

})

keepAlive();
client.login(process.env.TOKEN);
