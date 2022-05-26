import { createContext } from "react";
import { User } from "../Interfaces/types";
import { AuthState } from "./authReducer";

type AuthContextProps = {
   authState: AuthState,
   getLogOut: () => void
   // eslint-disable-next-line no-unused-vars
   getLogin: ( user: User ) => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)