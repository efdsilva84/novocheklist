import React, { useState, createContext, useEffect} from 'react';
import api from '../services/api';
export const UserContext = createContext({});

function UserProvider({children}){
        const [clientes, setClientes] = useState([]);

            async function locacaoDia(){
                const config ={
                    headers: {
                        'Content-Type': 'application/json',
                       Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                        Accept: 'aplication/json'
                    }
                }
                const response = await api.get('checklist/locacao_dia', config);
                console.log(response.data);
                console.log("passou por aqui");
                setClientes(response.data);
            }



    return(
        <UserContext.Provider value={{clientes ,locacaoDia}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
