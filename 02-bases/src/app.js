const getPokemonById = require('./js-foundation/06-promises');

const name = getPokemonById(4, (pokemon) => {
    console.log({pokemon})
})

