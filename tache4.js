const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'livre1', author: 'hugo' },
  { id: 2, title: 'livre2', author: 'Strange' },
];

app.get('/livres', (req, res) => {
  res.json(books);
});

app.get('/livres/titre/:titre', (req, res) => {
  const titreLivre = req.params.titre;
  const livresParTitre = books.filter(book => book.title === titreLivre);

  if (livresParTitre.length > 0) {
    res.json(livresParTitre);
  } else {
    res.status(404).json({ message: 'Aucun livre trouvé pour ce titre' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
