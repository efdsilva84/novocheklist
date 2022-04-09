import React,{ useContext, useState} from 'react';
import { Children } from 'react/cjs/react.production.min';


export const SearchContext = createContext({});


function searchProvider({children}){
    const [ locacao, setLocacao ] = useState([]);


    async function buscarLocacao(placa_car){
        setLoadingAuth(true);
        const placa = {placa_car}
        config={
            params:placa,
            headers: {
                'Content-Type': 'application/json',
               Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                Accept: 'aplication/json'
            }

        }
        const responde = await api.get('checklist/pesquisar_locacao', config);
        setLoadingAuth(false);
        
        console.log(responde.data);
        setLocacao(responde.data);

    }


    return(
        <SearchContext.searchProvider value={{buscando}}>
            {children}
        </SearchContext.searchProvider>
    );
}

export default searchProvider;

