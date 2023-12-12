const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Livre 1', isbn: '1234567890' },
  { id: 2, title: 'Livre 2', isbn: '0987654321' },
];

app.get('/livres', (req, res) => {
  res.json(books);
});

app.get('/livres/:isbn', (req, res) => {
  const isbnParam = req.params.isbn;
  const livre = books.find(book => book.isbn === isbnParam);

  if (livre) {
    res.json(livre);
  } else {
    res.status(404).json({ message: 'Livre non trouvé' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
