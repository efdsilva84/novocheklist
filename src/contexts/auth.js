import React,{ createContext, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import Api from '../screens/Api';




export const AuthContext = createContext({});

function AuthProvider({children}){
    const navigation = useNavigation();
    const[ user, setUser] = useState({});
    const [ loadingAuth, setLoadingAuth] = useState(false);

     async function entrar(login, senha){

        if(login !== '' && senha !== '' ){
            setLoadingAuth(true);
            let json = await Api.logar(login, senha);
                setLoadingAuth(false);
                    //const resp = await json.data;
                setUser({
                    login:login
                });
                console.log("armazenou");
            console.log(json);
            
                   navigation.navigate('Home')


    }
     }
    return(
        <AuthContext.Provider  value={{nome: 'edcarlos', entrar, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;