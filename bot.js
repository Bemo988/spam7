const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("616686880032948309")
setInterval(function() {
channel.send(`hello hello hello hello hello hello hello`);
}, 30)
})

client.login(process.env.BOT_TOKEN);