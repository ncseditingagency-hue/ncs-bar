function buildBar(pct) {
  const total = 20;
  const filled = Math.round((pct / 100) * total);
  const empty = total - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

function buildEmbed(clientName, projectName, pct, eta) {
  const { EmbedBuilder } = require('discord.js');

  const bar = buildBar(pct);

  let color;
  if (pct < 25)       color = 0x1a1d5e;
  else if (pct < 50)  color = 0x3243c8;
  else if (pct < 75)  color = 0x5865f2;
  else if (pct < 100) color = 0x57a5f2;
  else                color = 0x57f2a0;

  const status = pct === 100 ? '✅ Completato!' : '🎬 In lavorazione';

  return new EmbedBuilder()
    .setColor(color)
    .setTitle(`${projectName}`)
    .addFields(
      { name: 'Cliente', value: clientName, inline: true },
      { name: 'Stato', value: status, inline: true },
      { name: '\u200b', value: '\u200b', inline: false },
      { name: 'Progresso', value: `\`${bar}\`  **${pct}%**` },
      { name: '⏱ Consegna stimata', value: `**${eta}**`, inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'EditBot • Aggiornato' });
}

module.exports = { buildBar, buildEmbed };
