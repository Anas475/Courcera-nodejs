const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'livre1', author: 'Hugo', crit: 'Bonne critique pour le Livre 1' },
  { id: 2, title: 'livre2', author: 'Strange', crit: 'Bonne critique pour le Livre 2' },
];

app.get('/livres', (req, res) => {
  res.json(books);
});

app.get('/livres/titre/:titre/critique', (req, res) => {
  const titreLivre = req.params.titre;
  const livre = books.find(book => book.title === titreLivre);

  if (livre) {
    res.json({ critique: livre.crit });
  } else {
    res.status(404).json({ message: 'Aucun livre trouvé pour ce titre' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
