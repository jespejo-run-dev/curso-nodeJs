const heroes = [
    {
        id: 1,
        name: 'Batman',
        universe: 'DC',
    },
    {
        id: 2,
        name: 'Superman',
        universe: 'DC',
    },
    {
        id: 3,
        name: 'Spiderman',
        universe: 'Marvel',
    },
    {
        id: 4,
        name: 'Ironman',
        universe: 'Marvel',
    },
];

const findHeroById = (id:number) => {
    return heroes.find((hero) => hero.id === id);
};

const hero = findHeroById(5);
console.log(hero?.name ?? 'Hero not found');