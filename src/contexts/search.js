import React,{ createContext, useState} from 'react';
import api from '../services/api';
import { Keyboard } from 'react-native'

export const SearchContext = createContext({});

function SearchProvider({children}){
    const [ dados, setDados ] = useState({});
    const [ loadingAuth, setLoadingAuth] = useState(false);

    async function buscando(placa_car){
        if(placa_car == ''){
            alert("Digite uma placa");
            setPlaca_car('');
            return;
        }else{
            const placa = {placa_car}
            const config={
                params:placa,
                headers: {
                    'Content-Type': 'application/json',
                   Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                    Accept: 'aplication/json'
                }
            }
            try{
                 const response = await api.get('checklist/pesquisar_locacao', config);
                console.log(response.data);

                
                    setDados(response.data);
                    return dados.json();
                
                     Keyboard.dismiss();
            }catch(error){
                console.log("ERROR: " + error)
            }   
 
        }
    }
    return(
        <SearchContext.Provider value={{ buscando, dados}}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;

