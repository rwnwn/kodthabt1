const Discord = require('discord.js');

const Util = require('discord.js');

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
---------------------
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("ايدي الروم").join(); //by : Toxic Codes
    });

client.login(process.env.BOT_TOKEN);
