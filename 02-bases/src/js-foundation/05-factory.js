// const { getUUID, getAge } = require("../plugin");

const buildMakePerson = ({getUUID, getAge}) => {

    return ({name, birthdate}) => {
    
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }
}

module.exports = {
    buildMakePerson,
}