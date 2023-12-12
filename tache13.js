const axios = require('axios');

function rechercheParTitre(titre) {
  return new Promise((resolve, reject) => {
    axios.get(`http://bookApi.com/recherche?titre=${titre}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}
rechercheParTitre('Titre du livre')
  .then(resultat => console.log('Résultat de la recherche par titre :', resultat))
  .catch(error => console.error('Erreur lors de la recherche par titre :', error));
