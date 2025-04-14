import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {

    const getUUID = () => '123';
    const getAge = (birthdate: string) => new Date().getFullYear() - new Date(birthdate).getFullYear();

     test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});

        expect(typeof makePerson).toBe('function');
     })

     test('makePerson should return a person with id, name, birthdate and age', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        const person = makePerson({name: 'John', birthdate: '1990-01-01'});

        console.log(person);

        expect(person).toEqual({
            id: '123',
            name: 'John',
            birthdate: '1990-01-01',
            age: 36
        })
          
     })

})