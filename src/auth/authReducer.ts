import { User } from "../Interfaces/types"

export interface AuthState {
   logged: boolean,
   user: User
}

type ActionType = 
   | { type: 'login', payload: AuthState }
   | { type: 'logout' }

export const authReducer = ( state: AuthState, action:ActionType  ):AuthState => {
   switch (action.type){
      case 'login':
         return {
            logged: action.payload.logged,
            user: action.payload.user,
         }
      case 'logout':
         return { logged: false, user: {} as User }

      default:
         return state   
   }
}
