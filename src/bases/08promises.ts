import { Hero } from "../data/heroes";
import { getHeroById } from "./07import-export";

/* Ejemplo */
const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject(`No se encontró el héroe #${id}`);
    }, 1500);
  });
};

getHeroByIdAsync(5)
  .then((hero) => console.log("El nombre es", hero.name))
  .catch(alert);
