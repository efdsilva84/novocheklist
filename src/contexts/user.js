import React, { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({children}){
    return(
        <UserContext.Provider value={{data}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
