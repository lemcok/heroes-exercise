import { Navigate } from "react-router-dom"
import { useAuth } from "../heroes/components/auth/hooks/useAuth"

interface props {
   children: JSX.Element
}
export const PublicRoute = ({ children }: props) => {
   const { authState } = useAuth()

   return authState.logged
            ? <Navigate to='/' />
            : children
}