const axios = require('axios');

async function obtenirTousLesLivres() {
  try {
    const response = await axios.get('http://bookApi.com/books');
    return response.data;
  } catch (error) {
    throw error;
  }
}

obtenirTousLesLivres()
  .then(livres => console.log('Livres obtenus avec succès :', livres))
  .catch(error => console.error('Erreur lors de l obtention des livres :', error));
