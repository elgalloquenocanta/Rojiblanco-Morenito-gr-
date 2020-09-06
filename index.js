const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logueado como ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'gr!hello') {
    msg.reply('Hola, bienvenido a La Cueva Rojiblanca, ¿has traido maritoñis?');
  }
});

client.on('message', msg => {
  if (msg.content === 'gr!web') {
    msg.reply('Está es la web oficial del Granada CF,https://www.granadacf.es/');
  }
});

client.on('message', msg => {
  if (msg.content === 'gr!instagram') {
    msg.reply('Este es el instagram de rojiblancodeprimera, https://www.instagram.com/rojiblancodeprimera/');
  }
});

client.on('message', msg => {
  if (msg.content === 'gr!twitter') {
    msg.reply('Este es el Twitter de rojiblancodeprimera, https://twitter.com/Rojiblancodepr1');
  }
});

client.login(process.env.DISCORD_TOKEN);