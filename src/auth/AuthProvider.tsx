import { useEffect, useReducer } from "react"
import { User } from "../Interfaces/types"
import { AuthContext } from "./AuthContext"
import { authReducer, AuthState } from "./authReducer"

const INITIAL_STATE: AuthState = {
   logged: false,
   user: {} as User
} 

const init = () => {
   return JSON.parse( localStorage.getItem( 'authState') as string) || INITIAL_STATE
}

interface props {
   children: JSX.Element | JSX.Element[]
}
export const AuthProvider = ({ children }:props) => {
   const [ authState , dispatch ] = useReducer( authReducer, INITIAL_STATE, init )

   useEffect(() => {
      localStorage.setItem('authState', JSON.stringify(authState))
   }, [authState.user])

   const getLogOut = () => {
      dispatch({ type: 'logout'})
   }
   const getLogin = ( user: User ) => {
      dispatch({type: 'login', payload: { logged: true, user }})
   }

   return (
      <AuthContext.Provider value={{
         authState,
         getLogOut,
         getLogin
      }}>
         { children }
      </AuthContext.Provider>
   )
}