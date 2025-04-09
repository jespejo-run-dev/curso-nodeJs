
// console.log(process.env);


const {OS, PUBLIC, HOME} = process.env;

console.table({OS, PUBLIC, HOME});

const characters = ['Goku', 'Vegeta', 'Trunks'];
const [,,trunks] = characters;

console.log(trunks);
