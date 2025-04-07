
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url)
        .then(resp => resp.json())
        .then(() => {throw new Error('No se encontro el pokemon')})
        .then(data => data.name)}

module.exports = getPokemonById
