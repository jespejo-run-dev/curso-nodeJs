
const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const {name} = await resp.json()   
    // throw new Error('No existe el pokemon')
    return name
}

module.exports = getPokemonById
