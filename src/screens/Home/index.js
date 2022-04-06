import React,{useState, useEffect, useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import Locacoes from '../../components/Locacoes';
import Atendimento from '../../components/Atendimento';

  
//const api = 'https://klrentacar.com.br/sistema/api/';

function Home({route}){
    const navigation = useNavigation();
    const [ placa_car, setPlaca_car ] = useState('');
    const [dados, setDados ] = useState();
    const [ loadingAuth, setLoadingAuth] = useState(false);
    const [ locacaoAberta, setLocacaoAberta ] = useState([]);
    const [ locacao, setLocacao ] = useState([]);
    const [loadingRefresh, setLoadingRefresh] = useState(false);


    let dadosLocacao = null;


    function nextSaida(){
        navigation.navigate('CheckSaida');
    }
    function nextAtendimento(){
        navigation.navigate('Atendimento');
        
    }

    function handleRefresh(){
        async function locacaoDia(){
            const config ={
                headers: {
                    'Content-Type': 'application/json',
                   Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                    Accept: 'aplication/json'
                }
            }
            const responde = await api.get('checklist/locacao_dia', config);
            console.log(responde.data);
            setLocacaoAberta(responde.data);
        }
        locacaoDia();
    }




 

    async function buscarLocacao({data}){
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



    useEffect(()=>{
        async function locacaoDia(){
            const config ={
                headers: {
                    'Content-Type': 'application/json',
                   Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                    Accept: 'aplication/json'
                }
            }
            const responde = await api.get('checklist/locacao_dia', config);
            console.log(responde.data);
            setLocacaoAberta(responde.data);
        }
        locacaoDia();
    },[]);

    return(
        <View style={styles.container}>
            <Text>ola:{route.params.login}</Text>
                <View style={styles.input}>
                <TextInput 
                    style={styles.inputt}
                    placeholder="Placa do carro"
                    dataCorrect={false}
                    value={placa_car}
                    onChangeText={(placa_car)=> setPlaca_car(placa_car)}
            ></TextInput>
                         <TouchableOpacity style={styles.btn} onPress={buscarLocacao}>
                            {
                                loadingAuth ? (
                                    <ActivityIndicator size="large" color="#fff" />
    
                                ):( 
                                    <Text style={styles.txt}>BUSCAR</Text>
                                )
                            }
                </TouchableOpacity>
        
                <View>
                    <FlatList data={locacaoAberta}
                        renderItem={({ item}) => <Locacoes data={item}/>} 
                        keyExtractor={item => item.id_Loc} refreshing={loadingRefresh}
                        onRefresh={handleRefresh} />   
                     
                
                        
                    </View>
                            

                    <FlatList data={locacao}
                    renderItem={({item}) => <Locacoes data={item} />}  
                    keyExtractor={item => item.id_Loc} 
                    /> 
       
                </View>             
           
                  


                
                    
                 </View>
    
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    input:{
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth:0.7,
        borderRadius:3,
        padding:10,
        marginTop:10

    },
    inputt:{
        borderWidth:0.5,
        borderRadius:3
    },

    btn:{
        width: '100%',
        height:50,
        borderRadius: 3,
        backgroundColor: '#38a98d',
        justifyContent: 'center',
        marginTop:10

    },
    txt:{
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    locacao:{
        width: '100%',
        height:280,
        alignItems: 'center',
        marginTop:20,
    },
    locacaoint:{
        width: '95%',
        borderWidth:1,
        borderRadius:2

    },
    txtlocacao:{
        fontSize: 20,
        color: '#000',
        marginBottom:10,
        paddingLeft:10
    },
    txtnome:{
        fontSize:15,
        color: '#000',
        marginBottom:10,
        paddingLeft:10
    },
    txtcpf:{
        fontSize:15,
        color: '#000',
        marginBottom:10 ,
        marginRight:10
    },
    txtcpff:{
        marginLeft:10,
        fontSize:15
    },
    tx:{
        width: '100%',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    header2:{
        backgroundColor: '#ddd',
        flexDirection: 'row-reverse',
        marginTop:15,
        justifyContent: 'space-between',
        height:100
    },
    header2int:{
        backgroundColor: '#eee',
        width: '60%',
        alignItems: 'center'
    },
    avatar:{
  
        width: '40%'
        
    },
    botoes:{
        width: '100%',
        alignItems: 'center',
        marginTop:5,
    },
    botoesint:{
        width:'95%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnsaida:{
        backgroundColor: '#ff0000',
        width: '29%',
        height:90,
        justifyContent: 'center',
        borderRadius:5
    },
    btnentrada:{
        backgroundColor: '#008000',
        width: '29%',
        height:90,
        justifyContent: 'center',
        borderRadius:5

    },
    btnatendimento:{
        width: '40%',
        backgroundColor: '#0000ff',
        height:90,
        justifyContent: 'center',
        borderRadius:5
        
    },
    txtbotoes:{
        color: '#fff',
        textAlign: 'center',
        fontSize:20
    },
    areaa:{
        backgroundColor: '#836FFF'
    }
    
})

export default Home;