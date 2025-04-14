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

    test('getUserById should return the user if it exists', (done) => {

        
        const id = 1;
        getUserById(id, (err, user) => {
            
            
            expect(err).toBeUndefined();
            expect(user?.id).toBe(id);
            
            expect(user).toEqual({
                id: 1,
                name: 'John',
                age: 25,
                hobbies: ['reading', 'coding', 'hiking'],
                isActive: true,
            });

            expect(user?.name).toBe('John');
            
            expect(user?.hobbies).toContain('reading');
            
            expect(user?.hobbies?.length).toBe(3);

            done();
        });

    })

})