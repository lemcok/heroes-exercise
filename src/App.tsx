import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from './auth/AuthProvider'
import { MainRouter } from './routers/MainRouter'

export const App = () => {
   return (
      <NextUIProvider>
         <AuthProvider>
            <MainRouter />
         </AuthProvider>
      </NextUIProvider>
   )
}