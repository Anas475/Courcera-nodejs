const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());

const users = [
  { id: 1, nom: 'Utilisateur1', email: 'utilisateur1@example.com', motDePasse: 'motdepasse1' },
  { id: 2, nom: 'Utilisateur2', email: 'utilisateur2@example.com', motDePasse: 'motdepasse2' },
];

const critiques = [
  { userId: 1, livreId: 1, texte: 'Bonne critique pour le Livre 1' },
];

const secretKey = 'votre_clé_secrète';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentification requise' });
  }

  try {
    const decodedToken = jwt.verify(token, secretKey);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide' });
  }
};

app.post('/critiques', authMiddleware, (req, res) => {
  const { livreId, texte } = req.body;
  const userId = req.userId;

    const critiqueExistante = critiques.find(critique => critique.userId === userId && critique.livreId === livreId);

  if (critiqueExistante) {
    critiqueExistante.texte = texte;
    res.json({ message: 'Critique modifiée avec succès' });
  } else {
    critiques.push({ userId, livreId, texte });
    res.json({ message: 'Critique ajoutée avec succès' });
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
