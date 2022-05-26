import { HeroesList } from "../Heroes/HeroesList"

export const MarvelScreen = () => {
   return (
      <div>
         <h2>Marvel Heroes</h2>
         <HeroesList publisher="Marvel Comics"/>
      </div>
   )
}