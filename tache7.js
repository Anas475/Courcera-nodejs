const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, nom: 'Utilisateur1', email: 'utilisateur1@example.com', motDePasse: 'motdepasse1' },
  { id: 2, nom: 'Utilisateur2', email: 'utilisateur2@example.com', motDePasse: 'motdepasse2' },
];

const secretKey = 'votre_clé_secrète';
app.post('/utilisateurs/connexion', (req, res) => {
  const { email, motDePasse } = req.body;
  const utilisateur = users.find(user => user.email === email && user.motDePasse === motDePasse);

  if (utilisateur) {
    const token = jwt.sign({ userId: utilisateur.id, email: utilisateur.email }, secretKey, { expiresIn: '1h' });

    res.json({ message: 'Connexion réussie', token });
  } else {
    res.status(401).json({ message: 'Échec de la connexion. Vérifiez vos identifiants.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
