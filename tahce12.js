const axios = require('axios');

function rechercheParAuteur(auteur) {
  return new Promise((resolve, reject) => {
    axios.get(`http://bookApi.com/recherche?auteur=${auteur}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

rechercheParAuteur('Nom de l\'auteur')
  .then(resultat => console.log('Résultat de la recherche par auteur :', resultat))
  .catch(error => console.error('Erreur lors de la recherche par auteur :', error));
