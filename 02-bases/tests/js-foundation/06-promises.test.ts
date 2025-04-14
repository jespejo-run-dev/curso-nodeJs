import { getPokemonById } from "../../src/js-foundation/06-promises";


describe('Test in the 06-promises.ts File', () => {

    test('should return the pokemon name', async() => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('should return an error if the pokemon does not exist', async() => {
        const pokemonId = 1000000000;
        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy(); 
        } catch (error) {
            expect(error).toBe(`Pokemon with id ${pokemonId} does not exist`);
        }
    });

})