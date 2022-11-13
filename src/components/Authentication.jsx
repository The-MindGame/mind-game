import React from 'react'
import { useState, createContext } from 'react'


export const authContext = createContext({});


function Authentication({children}) {

    const [authentication, setAuthentication] = useState({});
    
    return (
        <authContext.Provider value={{authentication, setAuthentication}}>
            {children}
        </authContext.Provider>
    )
}

export default Authentication;