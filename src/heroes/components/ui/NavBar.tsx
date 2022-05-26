import { Link } from 'react-router-dom';
import { Card, Grid, Row, User } from '@nextui-org/react';
import { useAuth } from '../auth/hooks/useAuth';

export const NavBar = () => {
   const { user, getLogOut } = useAuth();

   return (
      <Grid.Container>

         <Card>
            <Row align='center'>
               <Row css={{ display: 'flex', gap: '1.25rem' }}>
                  <Link to="/">Home</Link>
                  <Link to="/marvel">Marvel</Link>
                  <Link to="/dc">DC</Link>
                  <Link to="/search">Search</Link>
                  <Link onClick={ getLogOut } to='/login'>
                     SignOut
                  </Link>
               </Row>

               <Link to="#">
                  <User
                     src={`https://i.pravatar.cc/150?u=a048581f4e29026701d`}
                     name={user.name}
                     size="md"
                  />
               </Link>
            </Row>
         </Card>
      </Grid.Container>

   );
};
