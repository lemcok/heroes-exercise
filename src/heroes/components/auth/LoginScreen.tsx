import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"

export const LoginScreen = () => {
   const navigate = useNavigate()
   const { getLogin, authState } = useAuth()

   const handleLogin = () => {
      getLogin({
         name: 'tete',
         email: 'asd',
         password: '123',
      });
      navigate('/', {replace: true})
   }
   return (
      <div>
         LoginScreen
         <Button onClick={ handleLogin }>Login</Button>
         <pre>
            { JSON.stringify(authState,null, 3) }
         </pre>
      </div>
   )
}