import { Spacer } from '@nextui-org/react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginScreen } from '../heroes/components/auth/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const MainRouter = () => {
   return (
      <BrowserRouter>
            <Spacer y={0.5}/>
            <Routes>
               <Route path='/*' element={ 
                  <PrivateRoute>
                     <DashboardRouter/>
                  </PrivateRoute>
                }/>
                
               <Route path='/login' element={ 
                  <PublicRoute>
                     <LoginScreen />
                  </PublicRoute>
                }/>
            </Routes>
      </BrowserRouter>
   )
}