require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { buildEmbed } = require('./bar');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Bot online come ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'progress') {
    // Controlla che sia Admin
    if (!interaction.member.permissions.has('Administrator')) {
      return interaction.reply({ content: '❌ Non hai i permessi!', ephemeral: true });
    }

    const pct = interaction.options.getInteger('percentuale');
    const eta = interaction.options.getString('consegna');
    const clientName = interaction.user.username;
    const projectName = interaction.channel.name;

    const embed = buildEmbed(clientName, projectName, pct, eta);
    await interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
