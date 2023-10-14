import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = {
  username: string
}

interface AuthContextType {
  user: User | null
  signin: (user: User) => void
  signout: () => void
  isAuthenticated: boolean
}

const defaultValue = {} as AuthContextType

const AuthContext = createContext<AuthContextType>(defaultValue) // Componentes Provider e Consumer

interface AuthProviderProps {
  children: React.ReactNode
}

// AuthProvider encapsula o AuthContextProvider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  })

  const signin = (user: User) => { 
    setUser(user); 
    localStorage.setItem('user', JSON.stringify(user));
  }

  const signout = () => { 
    setUser(null); 
    localStorage.removeItem('user');
  }

  const value = useMemo(() => ({
    user, signin, signout, isAuthenticated: user !== null
  }), [user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext)

  if (!authContext)
    throw new Error('useAuth fora do AuthProvider!')

  return authContext
}