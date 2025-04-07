const {getUserById} = require('./js-foundation/03-callbacks.js')

const id = 3;

getUserById(id, (err, user) => {
    if (err) {
        throw new Error(err);
    } 

    console.log(user);
})
