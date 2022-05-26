import { heroes } from "../data/heroes"
import { Hero } from "../Interfaces/types"

export const getHeroById = ( id: string ):Hero => {
   const HeroInitial:Hero = {
      id: "",
      superhero: "",
      publisher: "",
      alter_ego: "",
      first_appearance: "",
      characters: ""
   }
   const item = heroes.find( (hero) => hero.id === id ) || HeroInitial
   return item   
}
