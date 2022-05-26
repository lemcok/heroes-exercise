import { heroes } from "../data/heroes";

export const getHeroByName = ( name = '' ) => {     
   if (name === '') {
      return []
   }
   const superHero = heroes.filter((hero) =>
      hero.superhero.toLocaleLowerCase().includes(name)
   );
   return superHero
}