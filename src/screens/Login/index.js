import React,{useState, useContext, Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Alert, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { Input } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../Api';
import api from '../../services/api';



export default ( )=>{
    const navigation = useNavigation();
    const [ login, setLogin] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ loadingAuth, setLoadingAuth] = useState(false);
    const [ loginkl , setloginkl ] = useState(true);
    const [ dados, setDados ] = useState('');

    const api = 'https://klrentacar.com.br/sistema/api/';

    
    async function logar() {
        if(login != '' && senha != '' ){
            setLoadingAuth(true);
            let json = await Api.logar(login, senha);
            setLoadingAuth(false);
            
                //const resp = await json.data;
            setDados(json);
            console.log(json);
                   navigation.replace('Home',{usu: dados.login_usu});  
        }else{
            mensagemDadosIncorretos();
        }

     const checkLogin = async () =>{
         const user = await AsyncStorage.getItem('@login');
         if(user){
             setLogin(user);
             navigation.replace('Home');
         }

     }
     useEffect(()=>{
        checkLogin();
     },[]);
   
        
      }

      const mensagemDadosIncorretos = () =>{
        Alert.alert(
          "Erro ao Logar",
          "Email ou Senha Incorretos",
          [
            
            { text: "OK"  }
          ],
          { cancelable: true }
        );  

      }
      function Merronit(){
          setloginkl(false);
      }
      function kl(){
        setloginkl(true);
    }
      if(loginkl){
        return(
            <View style={styles.container}> 
                <LinearGradient colors={['#38a98de6', '#38a98dcc', '#ffffffb3']} style={{flex:1, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.imgbtn} onPress={Merronit}>
                    <Image source={require("../../assets/img/kll.png")} style={{width:'55%', height:80, paddingBottom:30}}  />
                </TouchableOpacity>
                <View style={styles.int}>
                <TextInput 
                    style={styles.input}
                    placeholder="Insira o Usuário"
                    dataCorrect={false}
                    value={login}
                    onChangeText={l=> setLogin(l)}
                    autoCapitalize='none'
                ></TextInput>
                
                <TextInput style={styles.input}
                    placeholder="******"
                    secureTextEntry={true}
                    dataCorrect={false}
                    value={senha}
                    onChangeText={(senha)=> setSenha(senha)}  
                ></TextInput>
            
                 <TouchableOpacity style={styles.btn} onPress={logar}>
                            {
                                loadingAuth ? (
                                    <ActivityIndicator size="large" color="#fff" />
    
                                ):( 
                                    <Text style={styles.txt}>ENTRAR</Text>
                                )
                            }
                </TouchableOpacity>
                <View style={styles.check}>
                    <Text style={styles.checktxt}>CHECKLIST</Text>
                </View>
                </View>  
                </LinearGradient>
            </View>
        );
      }
      return(
          <View style={styles.containerMerronit}>
                <LinearGradient colors={['#A52A2Ae6', '#FA8072cc', '#ffffffb3']} style={{flex:1, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.imgbtn} onPress={kl}>
                        <Image source={require("../../assets/img/logo.png")} style={{width:'55%', height:80, paddingBottom:30, borderRadius:5}}  />
                    </TouchableOpacity>
                    <View style={styles.int}>
                        <View style={styles.usuario}>
                    </View>
            <View style={styles.int}>
            <TextInput 
                style={styles.input}
                placeholder="Insira o Usuário"
                dataCorrect={false}
                value={login}
                onChangeText={(login)=> setLogin(login)}
            ></TextInput>
            <TextInput style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                dataCorrect={false}
                value={senha}
                onChangeText={(senha)=> setSenha(senha)}  
            ></TextInput>
             <TouchableOpacity style={styles.btnMerronit} onPress={logar}>
                        {
                            loadingAuth ? (
                                <ActivityIndicator size="large" color="#fff" />
                            ):( 
                                <Text style={styles.txt}>ENTRAR</Text>
                            )
                        }
            </TouchableOpacity>
      
       
            </View>  
            </View>  
            </LinearGradient>
          </View>
      );

}
const styles = StyleSheet.create({
    containerMerronit:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FA8072'
    },
    imgbtn:{
        width: '100%',
        height:81,
        alignItems: 'center'
    
    },
    btnMerronit:{
        width: '100%',
        height: 50,
        backgroundColor: '#A52A2A',
        marginTop:17,
        borderRadius:3,
        justifyContent: 'center'

    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32CD32'
    },
    btnn:{
        backgroundColor: '#fff'
    },
    int:{
        width: '85%',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop:20,
        borderRadius:10,
        marginTop:10
    
    },
    input: {
        backgroundColor: '#FFF',
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 7,
        padding:10,
        width: '75%',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        color: '#fff'
    
    },    
    check:{
        width:'100%',
        height: 50,
        marginTop:20
    },
    checktxt:{
        fontSize:50,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing:18
    },
    slide:{
        width: '100%',
        height:90,
        backgroundColor: '#ccc',
        justifyContent: 'space-between',
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor: '#fff',
        width: '100%',
        borderRadius:3,
        color: '#fff'
    },
    btn:{
        width: '100%',
        height: 50,
        backgroundColor: '#106852',
        marginTop:17,
        borderRadius:3,
        justifyContent: 'center'

    },
    txt:{
        textAlign: 'center',
        fontSize:25,
        fontWeight: 'bold',
        color: '#fff'
    }
})