import heroes, { Owner } from "../data/heroes";

export const getHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id) || null; // Devolver null en vez de un objeto vacío
};

//console.log(getHeroById(5));

export const getHeroesByOwner = (owner: string) => {
  return heroes.filter((hero) => hero.owner === owner); // filter devuelve todos los valores correspondientes
};

//console.log(getHeroesByOwner("Marvel"));
