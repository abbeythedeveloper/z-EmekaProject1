/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({})
export function UserContextProvider({children}) {
const [user, setUser] = useState(null);
useEffect(() => {
    if(!user) {
        axios.get('/profile').then(({data}) => {
            setUser(data)
        })
    } else {
        setUser(null)
    }
}, []);

const logout = () => {
    setUser(null)
}

    return (
    <UserContext.Provider value={{user, logout}}>
        {children}
    </UserContext.Provider>
    )
}