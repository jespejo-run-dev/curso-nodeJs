import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-callbacks', () => {
    
    test('getUserById should return an error if user does not exist', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {

            expect(err?.message).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done();
        });
    
    })

})