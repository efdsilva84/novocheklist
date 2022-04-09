import React,{useState, useContext, Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Alert, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Input } from './styles';
import Api from '../Api';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import * as Animatable from 'react-native-animatable'




export default ( )=>{
    const [ senha, setSenha ] = useState('');
    const [ login, setLogin] = useState('');
    const [ loadingAuth, setLoadingAuth] = useState(false);
    const [ loginkl , setloginkl ] = useState(true);
    const [ dados, setDados ] = useState('');

    const { entrar } = useContext(AuthContext);

    const api = 'https://klrentacar.com.br/sistema/api/';

    
    async function logar(){
        setLoadingAuth(true);
           entrar(login, senha);
          // setLoadingAuth(false);
        
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
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Bem Vindo(a)</Text>
                        <TouchableOpacity style={styles.containerLogo} onPress={Merronit}>
                            <Image source={require("../../assets/img/kll.png")} style={{width:'80%'}} resizeMode="contain"
                        animation="flipInY"/>
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                
                <Text style={styles.title}>Login: </Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="Insira o Usuário"
                    dataCorrect={false}
                    value={login}
                    onChangeText={l=> setLogin(l)}
                    autoCapitalize='none'
                ></TextInput>
                <Text style={styles.title}>Senha: </Text>
                <TextInput style={styles.input}
                    placeholder="******"
                    secureTextEntry={true}
                    dataCorrect={false}
                    value={senha}
                    onChangeText={(senha)=> setSenha(senha)}  
                ></TextInput>

                <TouchableOpacity style={styles.button} onPress={logar}>
                            {
                                loadingAuth ? (
                                    <ActivityIndicator size="large" color="#fff" />
    
                                ):( 
                                    <Text style={styles.buttontext} >ENTRAR</Text>
                                )
                            }
                </TouchableOpacity>

                
         

                </Animatable.View>
             
                
            </View>
        );
      }
      return(
        <View style={styles.containerMerronit}> 
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
                <TouchableOpacity style={styles.containerLogo} onPress={kl}>
                    <Image source={require("../../assets/img/logo.png")} style={{width:'100%', borderRadius:2}} resizeMode="contain"
                animation="flipInY"/>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        
        <Text style={styles.title}>Login: </Text>
            <TextInput 
            style={styles.input}
            placeholder="Insira o Usuário"
            dataCorrect={false}
            value={login}
            onChangeText={l=> setLogin(l)}
            autoCapitalize='none'
        ></TextInput>
        <Text style={styles.title}>Senha: </Text>
        <TextInput style={styles.input}
            placeholder="******"
            secureTextEntry={true}
            dataCorrect={false}
            value={senha}
            onChangeText={(senha)=> setSenha(senha)}  
        ></TextInput>

        <TouchableOpacity style={styles.buttonMerronit} onPress={logar}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size="large" color="#fff" />

                        ):( 
                            <Text style={styles.buttontext} >ENTRAR</Text>
                        )
                    }
        </TouchableOpacity>

        
 

        </Animatable.View>
     
        
    </View>
);
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a98d'
    },
    containerMerronit:{
        flex: 1,
        backgroundColor: '#9c0a00'
    },
    containerHeaderMerronit:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    messageMerronit:{
        fontSize:28,
        fontWeight: 'bold',
        color: '#fff'
    },
    message:{
        fontSize:28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize:20,
        marginTop:28
    },
    input: {
        borderBottomWidth: 1,
        height:40,
        marginBottom:12,
        fontSize:16
    },  
    inputMerronit:{
        borderBottomWidth: 1,
        height:40,
        marginBottom:12,
        fontSize:16,
        borderColor: '#fff'
    },
    button:{
        backgroundColor: '#38a98d',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        alignItems: 'center',
        justifyContent: 'center',
        height:40
    },
    buttontext:{
        color: '#fff',
        fontSize:18,
        fontWeight: 'bold'
    },
    buttonMerronit:{
        backgroundColor: '#9c0b01',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        alignItems: 'center',
        justifyContent: 'center',
        height:40
    },
    containerLogo:{
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100
    },
    containerLogoMerronit:{
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100
    }

  
    

    
})