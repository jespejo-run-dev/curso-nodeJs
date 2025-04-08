const {http} = require('../plugin')

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await http.get(url)
    return resp.name
}

module.exports = getPokemonById
