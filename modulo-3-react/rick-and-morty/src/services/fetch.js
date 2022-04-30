const getCharactersApi = (props) => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((apiData) => {
      return apiData.results.map((objet) => ({
        id: objet.id,
        name: objet.name,
        image: objet.image,
        species: objet.species,
        status: objet.status,
      }));
    });
};
export default getCharactersApi;
