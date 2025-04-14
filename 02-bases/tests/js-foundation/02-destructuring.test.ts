import { characters } from "../../src/js-foundation/02-destructuring"

describe('Test in the Destructuring File', () => {
    test('character shound containt Goku, Vegeta', () => {
        expect(characters).toContain('Goku');
        expect(characters).toContain('Vegeta');
    })

    test('first character should be Goku, and second Vegeta', () => {
        const [goku, vegeta] = characters;

        expect(goku).toBe('Goku');
        expect(vegeta).toBe('Vegeta');
    })
})