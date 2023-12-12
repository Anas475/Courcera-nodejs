const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Livre 1' },
  { id: 2, title: 'Livre 2' },
];

app.get('/livres', (req, res) => {
  res.json(books);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
