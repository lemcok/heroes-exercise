import { HeroesList } from "../Heroes/HeroesList"

export const DcScreen = () => {
   return (
      <div>
         <h2>DC Heroes</h2>
         <HeroesList publisher="DC Comics"/>
      </div>
   )
}