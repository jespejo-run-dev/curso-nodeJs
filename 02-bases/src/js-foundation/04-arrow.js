const users = [
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

const getUserById = (id, callback) => {    
    const user = users.find(user => user.id === id)

    if (!user) return callback(new Error(`User not found with id ${id}`))
    
    callback(null, user)
}

module.exports = {
    getUserById
}