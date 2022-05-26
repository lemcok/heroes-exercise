import { heroes } from "../data/heroes"

export const getHeroesByPublisher = ( publiser: string ) => {
   const validPublishers = ['DC Comics', 'Marvel Comics']

   if( !validPublishers.includes( publiser ) ){
      throw new Error(`Publisher "${ publiser }" no es correcto`)
   }

   return heroes.filter( hero => hero.publisher === publiser )
}
