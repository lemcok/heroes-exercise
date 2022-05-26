import { useContext } from "react"
import { AuthContext } from "../../../../auth/AuthContext"

export const useAuth = () => {
   const { authState, getLogin, getLogOut } = useContext(AuthContext)
   
   return {
      authState,
      ...authState,
      getLogOut,
      getLogin
   }
}
