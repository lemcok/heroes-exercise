import { Container } from '@nextui-org/react';
import { Route, Routes } from 'react-router-dom';
import { DcScreen } from '../heroes/components/dc/DcScreen';
import { HeroScreen } from '../heroes/components/Heroes/HeroScreen';
import { HomeScreen } from '../heroes/components/home/HomeScreen';
import { MarvelScreen } from '../heroes/components/marvel/MarvelScreen';
import { SearchScreen } from '../heroes/components/search/SearchScreen';
import { NavBar } from '../heroes/components/ui/NavBar';

export const DashboardRouter = () => {
   return (
      <Container>
         <NavBar />
         <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/dc" element={<DcScreen />} />
            <Route path="/hero/:id" element={<HeroScreen />} />
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/*" element={<HomeScreen />} />
         </Routes>
      </Container>
   );
};
