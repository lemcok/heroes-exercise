import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { getHeroById } from "../../../selectors/getHeroById"
import { HeroCard } from "./HeroCard"

export const HeroScreen = () => {
   const params = useParams()
   const hero = useMemo(()=> getHeroById( params.id || '404'  ), [params.id])
   
   return (
      <div>
         <HeroCard hero={ hero } showAs='screen' />
      </div>
   )
}