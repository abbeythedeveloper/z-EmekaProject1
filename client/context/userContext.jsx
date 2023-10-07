/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({})
export function UserContextProvider({children}) {
const [user, setUser] = useState(null);
useEffect(() => {
    if (!user) {
        axios.get('/profile')
            .then(({ data }) => {
                setUser(data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    } else {
        setUser(null);
    }
}, []);



    return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
    )
}