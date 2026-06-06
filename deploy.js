require('dotenv').config();
const { REST, Routes } = require('@discordjs/rest');
const commands = require('./commands'); // il tuo file commands.js

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registro i comandi...');
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('Comandi registrati!');
  } catch (err) {
    console.error(err);
  }
})();
