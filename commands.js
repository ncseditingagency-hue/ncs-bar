module.exports = [
  {
    name: 'ticket',
    description: 'Apri un nuovo ticket di video editing',
    options: [
      {
        name: 'progetto',
        description: 'Nome del progetto (es. Reel matrimonio)',
        type: 3,
        required: true
      }
    ]
  },
  {
    name: 'progress',
    description: '[STAFF] Aggiorna il progresso nel canale ticket corrente',
    options: [
      {
        name: 'percentuale',
        description: 'Percentuale completamento (0-100)',
        type: 4,
        required: true,
        min_value: 0,
        max_value: 100
      },
      {
        name: 'consegna',
        description: 'Tempo stimato (es: 2 giorni, 5 ore, 1 settimana)',
        type: 3,
        required: true
      }
    ]
  },
  {
    name: 'chiudi',
    description: '[STAFF] Chiudi e archivia il ticket corrente'
  }
];
