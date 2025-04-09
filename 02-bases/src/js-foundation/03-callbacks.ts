interface User {
    id: number;
    name: string;
    age: number;
    hobbies: string[];
    isActive?: boolean;
}

const users:User[] = [
    {
        id: 1,
        name: 'John',
        age: 25,
        hobbies: ['reading', 'coding', 'hiking'],
        isActive: true,
    },{
        id: 2,
        name: 'Jane',
        age: 30,
        hobbies: ['painting', 'swimming', 'cooking'],
    }
]

export function getUserById(id: number, callback: (err?: Error, user?:User) => void) {    
    const user = users.find(user => user.id === id)

    if (!user) {
        return callback(new Error(`User not found with id ${id}`))
    } 
    callback(undefined, user)
}