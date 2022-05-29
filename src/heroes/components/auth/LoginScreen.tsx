import { Button, Card, Grid, Input, Spacer, Text } from '@nextui-org/react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { User } from '../../../Interfaces/types';
import { useAuth } from './hooks/useAuth';

export const LoginScreen = () => {
   const { values, handleInputChange } = useForm({
      name: 'fernan',
      email: 'fer@example.com',
      password: '1234',
   } as User);

   const { name, email, password } = values;

   const navigate = useNavigate();
   const { getLogin } = useAuth();

   const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      getLogin(values);
      navigate('/', { replace: true });
   };

   return (
      <Grid.Container css={{ placeContent: 'center', height: '100vh' }}>
         <Grid xs={4}>
            <Card css={{ backgroundImage: 'url(public/img/login_bg.jpg)' }}>
               <form
                  onSubmit={handleLogin}
                  style={{ display: 'grid', placeContent: 'center' }}
               >
                  <Text h4 css={{ textAlign: 'center' }}>
                     Login
                  </Text>
                  <Spacer y={1.5} />
                  <Input
                     aria-label="true"
                     placeholder="name"
                     name="name"
                     value={name}
                     onChange={handleInputChange}
                  />
                  <Spacer y={1} />
                  <Input
                     aria-label="true"
                     placeholder="email"
                     name="email"
                     value={email}
                     onChange={handleInputChange}
                  />
                  <Spacer y={1} />
                  <Input.Password
                     aria-label="true"
                     placeholder="password"
                     name="password"
                     value={password}
                     onChange={handleInputChange}
                  />
                  <Spacer y={1} />
                  <Button type="submit">Login</Button>
               </form>
            </Card>
         </Grid>
      </Grid.Container>
   );
};
