const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'livre1', author: 'hugo' },
  { id: 2, title: 'livre2', author: 'strange' },
]

app.get('/livres', (req, res) => {
  res.json(books);
});

app.get('/livres/auteur/:nom', (req, res) => {
  const nomAuteur = req.params.nom;
  const livresParAuteur = books.filter(book => book.author === nomAuteur);

  if (livresParAuteur.length > 0) {
    res.json(livresParAuteur);
  } else {
    res.status(404).json({ message: 'Aucun livre trouvé pour cet auteur' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
