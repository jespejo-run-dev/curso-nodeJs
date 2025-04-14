
// console.log(process.env);


const {OS, PUBLIC, HOME} = process.env;

console.table({OS, PUBLIC, HOME});

export const characters = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];
const [,,trunks] = characters;

console.log(trunks);
