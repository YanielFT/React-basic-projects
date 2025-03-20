import { heroes } from "../data/heroes";

export const getHerosByName = (name, asc) => {
  if (name.trim().length === 0) return [];

  return heroes
    .filter((hero) => hero.superhero.toLowerCase().includes(name.trim()))
    .sort((a, b) => {
      const comparison = a.superhero.localeCompare(b.superhero);
      return asc ? comparison : -comparison;
    });
};
