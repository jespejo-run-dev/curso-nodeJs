const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4)
    .then((pokemon) => console.log(pokemon))
   .catch((err) => console.log('Pokemon no encontrado'))
  .finally(() => console.log('Fin de la ejecucion'))

