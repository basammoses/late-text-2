//@ts-nocheck

import { useState, createContext } from 'react'
import axios from 'axios'


export const AuthContext = createContext({
    user: {},
    setUser: () => { },
    token: null,
    setToken: () => { },
})

export function AuthContextProvider(props) {

    const [user, setUser] = useState({})
  const [token, setAccessToken] = useState()
  const verifyUser = () => {
    axios
      .get("http://localhost:3000/api/user/verify", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      });
  
  
  }
  
    

    return <AuthContext.Provider value={{
      user, setUser,
      token, setAccessToken,
      verifyUser
        
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext