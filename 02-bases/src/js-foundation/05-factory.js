const { getUUID, getAge } = require("../plugin");


const buildPerson = ({name, birthdate}) => {
    
    return {
        id: getUUID(),
        name,
        birthdate,
        age: getAge(birthdate),
    }
}

const obj = {
    name: 'John',
    birthdate: '1990-01-01',
}

const john = buildPerson(obj)

console.log(john);