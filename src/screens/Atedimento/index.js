import React, {useState, useContext} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { UserContext } from '../../contexts/user';
import { AuthContext } from '../../contexts/auth';
export default function Atendimento({route}){


    const { nome, user } = useContext(AuthContext)
    const [procedimento, setProcedimento ] = useState(0);
    const [adesivo, setAdesivo ] = useState(0);
    const [ loadingAuth, setLoadingAuth] = useState(false);



    async function salvarAtendimento(){
        setLoadingAuth(true);
        const config = {id_cliente, id_usuario, placa_car, km_carro, adesivo, procedencia, observacao, }
        config={
            params: config,
            headers: {
                'Content-Type': 'application/json',
               Authorization: 'Basic S2wgUmVudCBhIENhcmt1bjpEUUNhWXQyY1lYcWI2ZXM0',
                Accept: 'aplication/json'
            }

        }
    

    }


    return(
        <ScrollView style={styles.container}>
               <View style={styles.atendimento}>
                   <View style={styles.topo}>
                    <View style={styles.avatar}>
                            <Image   />
                    </View>
                    <View style={styles.txt}>
                    <Text style={styles.txtcnh}>CNH: {route.params.cnh}</Text>
                        <Text style={styles.txtcnh}>Locação: {route.params.loca}</Text>
                        <Text style={styles.txtcnh}>ID: {route.params.cliente}</Text>
                        <Text>nome:{nome} email : {user.login}</Text>
                        <Text>status:{user.status}</Text>
                    

                    </View>
                   </View>  

                   <View style={styles.selecao}>
                       <Picker
                        selectedValue={procedimento}
                        onValueChange={(itemValue, itemIndex ) => setProcedimento(itemValue)}
                       >
                           <Picker.Item key={0} value={"amortizacao"} label="Amortização" />
                           <Picker.Item key={1} value={"trocar_carro"} label="Trocar Carro" />
                           <Picker.Item key={2} value={"trocar_condutor"} label="Trocar Condutor" />
                           <Picker.Item key={3} value={"fechar_contrado"} label="Fechar Contrado" />
                           <Picker.Item key={4} value={"avarias"} label="Avarias" />
                           <Picker.Item key={5} value={"outros"} label="Outros" />


                           
                       </Picker>
                       </View>    
                       <View style={styles.adesivo}>
                       <Picker
                        selectedValue={adesivo}
                        onValueChange={(itemValue, itemIndex ) => setAdesivo(itemValue)}
                       >
                           <Picker.Item key={0} value={0} label="Com Adesivo" />
                           <Picker.Item key={1} value={1} label="Sem Adesivo" />
                 


                           
                       </Picker>
                        </View>   
                        <View style={styles.kms}>
                        <TextInput editable={false} selectTextOnFocus={false} style={styles.inp} placeholder="ÚLTIMA KM" >{route.params.oleo}</TextInput>
                        <TextInput style={styles.inp} placeholder="KM ATUAL" ></TextInput>

                            </View>  
                            <View style={styles.area}>
                                <TextInput placeholder="Obervações"   multiline={true}   numberOfLines={8} />
                                </View> 
                                <TouchableOpacity style={styles.salve} onPress={salvarAtendimento}>
                                {
                                loadingAuth ? (
                                    <ActivityIndicator size="large" color="#fff" />
    
                                ):( 
                                    <Text style={styles.txtsalve}>SALVAR ATENDIMENTO</Text>
                                )
                            }
                                </TouchableOpacity>
                                

             </View>

        </ScrollView>
     
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    atendimento:{
        flex:1,
        width:'100%',
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    topo:{
        width:'100%',
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    avatar:{
        backgroundColor: '#ddd',
        width: '27%',
        height:100,
        borderRadius:4
    },
 
    txt:{
        backgroundColor: '#fff',
        width: '67%'
    },
    selecao:{
        width: '95%',
        backgroundColor: '#ddd',
        marginTop:20
    },
    adesivo:{
        width: '95%',
        backgroundColor: '#DDD',
        marginTop:20
    },
    kms:{
        flex:1,
        flexDirection: 'row',
        width:'95%',
        marginTop:10
    },
    inp:{
        width:'50%',
        backgroundColor: '#DDD',
        color: '#000'
    },
    area:{
        width: '95%',
        backgroundColor: '#DDD',
        marginTop:10
    },
    salve:{
        backgroundColor: '#4169E1',
        width:'95%',
        flex:1,
        marginTop:10,
        height:50,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtsalve:{
        fontSize:20,
        color: '#FFF'
    },
    txtcnh:{
        color:'#000',
        fontSize:18,
        marginLeft:10
    }

})