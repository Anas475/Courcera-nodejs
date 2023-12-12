const axios = require('axios');

function rechercheParISBN(isbn) {
  return new Promise((resolve, reject) => {
    axios.get(`http://bookApi.com/recherche?isbn=${isbn}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

rechercheParISBN('1234567890')
  .then(resultat => console.log('Résultat de la recherche par ISBN :', resultat))
  .catch(error => console.error('Erreur lors de la recherche par ISBN :', error));
