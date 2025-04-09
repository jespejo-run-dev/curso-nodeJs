
export interface Hero {
    id: number;
    name: string;
    universe: string; 
}

export const heroes:Hero[] = [
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