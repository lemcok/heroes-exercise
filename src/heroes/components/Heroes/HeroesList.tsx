import { Grid } from '@nextui-org/react';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

interface Props {
   publisher: 'Marvel Comics' | 'DC Comics';
}
export const HeroesList = ({ publisher }: Props) => {
   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

   return (
      <Grid.Container gap={2} justify="flex-start">
         {heroes.map((hero) => (
            <Grid
               key={hero.id}
               xs={6}
               sm={4}
               lg={2}
               className="animate__animated animate__fadeIn"
            >
               <HeroCard hero={hero} />
            </Grid>
         ))}
      </Grid.Container>
   );
};
