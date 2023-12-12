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

app.delete('/critiques/:livreId', authMiddleware, (req, res) => {
  const livreId = parseInt(req.params.livreId);
  const userId = req.userId;


  const critiqueIndex = critiques.findIndex(critique => critique.userId === userId && critique.livreId === livreId);

  if (critiqueIndex !== -1) {
    critiques.splice(critiqueIndex, 1);
    res.json({ message: 'Critique supprimée avec succès' });
  } else {
    res.status(404).json({ message: 'Critique non trouvée ou vous n\'êtes pas autorisé à la supprimer' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
