const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [];
app.get('/utilisateurs/enregistrement', (req, res) => {
  const nouvelUtilisateur = req.body;

  if (!nouvelUtilisateur || !nouvelUtilisateur.nom || !nouvelUtilisateur.email) {
    return res.status(400).json({ message: 'Nom et email sont obligatoires' });
  }

  users.push(nouvelUtilisateur);

  res.json({ message: 'Utilisateur enregistré avec succès' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
