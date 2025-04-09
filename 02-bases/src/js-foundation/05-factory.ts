// const { getUUID, getAge } = require("../plugin");

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface Person {
    name: string;
    birthdate: string; 
}


export const buildMakePerson = ({getUUID, getAge}: BuildMakePersonOptions) => {

    return ({name, birthdate}: Person) => {
    
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }
}
