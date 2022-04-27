import { createContext, useContext } from "react";

const AuthContext = createContext()

export default function AuthProvider({children}) {
  return <AuthContext.Provider value={{test: 'success for auth'}}>
    {children}
  </AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}