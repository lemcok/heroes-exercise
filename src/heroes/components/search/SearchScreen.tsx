import { Grid, Input, Spacer } from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { getHeroByName } from '../../../selectors/getHeroByName';
import queryString from 'query-string'
import { FormEvent, useMemo } from 'react';
import { HeroCard } from '../Heroes/HeroCard';

interface FormData {
   searchText: string
}
export const SearchScreen = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const { q = '' } = queryString.parse(location.search )

   const { searchText, handleInputChange } = useForm<FormData>({
      searchText: ''
   })

   const foundHero = useMemo(() => getHeroByName( q as string ), [q])

   const handleSearch = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      navigate(`?q=${ searchText }`)
   }

   return (
      <> 
         <Spacer y={1} />
         <Grid.Container>
            <Grid>
               <form onSubmit={handleSearch}>
                  <Input
                     aria-label="off"
                     shadow={false}
                     placeholder="Search..."
                     color="primary"
                     bordered
                     name='searchText'
                     value={searchText}
                     onChange={ handleInputChange }
                  />
               </form>
            </Grid>
            <Grid>
               {
                  foundHero.map(hero => {
                     return <HeroCard key={hero.id} hero={hero} />
                  })
               }
            </Grid>
         </Grid.Container>
      </>
   );
};
