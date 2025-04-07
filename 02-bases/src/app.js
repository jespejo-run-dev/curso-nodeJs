const {getUUID, getAge} = require('./plugin')
const {buildMakePerson} = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({getUUID, getAge})

const obj = {
    name: 'John',
    birthdate: '1990-01-01',
}

const person = makePerson(obj)

console.log({person})