const { TOKEN, KANAL, SERVER, LIVE } = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client();
const ytdl = require('ytdl-core');

client.on('ready', async () => {
  client.user.setActivity('KOKS BOT')
  let channel = client.channels.cache.get(KANAL) || await client.channels.fetch(KANAL)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LIVE))
})

setInterval(async function() {
  if(!client.voice.connections.get(SERVER)) {
    let channel = client.channels.cache.get(KANAL) || await client.channels.fetch(KANAL)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(LIVE))
  }
}, 20000)

client.login(TOKEN)
