//@ts-nocheck

import { useState, createContext } from 'react'


export const AuthContext = createContext({
    user: {},
    setUser: () => { },
    token: null,
    setToken: () => { },
})

export function AuthContextProvider(props) {

    const [user, setUser] = useState({})
    const [token, setAccessToken] = useState()
    

    return <AuthContext.Provider value={{
        user, setUser,
        token, setAccessToken,
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext