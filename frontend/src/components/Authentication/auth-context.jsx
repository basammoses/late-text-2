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
  const [token, setToken] = useState()
  const verifyUser = () => {
    axios
      .get("https://late-text.herokuapp.com/api/user/verify", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      });
  
  
  }
  
    

    return <AuthContext.Provider value={{
      user, setUser,
      token, setToken,
      verifyUser
        
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext