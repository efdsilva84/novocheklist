import { useNavigation } from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



 function Locacoes({data}) {
    const navigation = useNavigation();
    const [ visibleModal, setVisibleModal ] = useState(false);
    const [ modalAtendimento, setModalAtendimento ] = useState(false);


 
    function Atender(){
        navigation.navigate('Atendimento',{loca: data.id_Loc, nome: data.nome_cli, cnh: data.habilitacao_cli,
            foto: data.foto, oleo: data.oleo_km_car, cliente: data.id_cli, pla: data.placa_car
        });
    }

    function Retorno(){
        navigation.navigate('Checklist',{loca: data.id_Loc, nome: data.nome_cli, oleo: data.oleo_km_car, modelo: modelo_car});
    }


 




    return(

        <ScrollView style={styles.cont} showsVerticalScrollIndicator={false}>
            <View style={styles.alinhamento}>
                 <View style={styles.card}>
              
                <View style={styles.locacao}>
                    <Text style={styles.txtlocacao}>Locação : {data.id_Loc}</Text>
                    <TouchableOpacity style={styles.btn}>
                         <FontAwesome name="folder-open" size={30}  width="100" color="#fff"/>
                    </TouchableOpacity>
                    
                </View>
                <Text style={styles.txtnome}>NOME : {data.nome_cli}</Text>
                     <Text style={styles.txtcpf}>CPF : {data.cpf_cli}</Text>
              
          
          <View style={styles.infoalinhamento}>
          <View style={styles.info}>
                    <View style={styles.infoint}>
                        <Text style={styles.infotxt}>PLACA : {data.placa_car}</Text>
                         <Text style={styles.infotxt}>MODELO : {data.modelo_car}</Text>
                        <Text style={styles.infotxt}>COR : {data.cor_car}</Text>
                    </View>
                    <View style={styles.capa}>
                        <Image source={{uri: data.foto}} style={styles.capa}/>
                    </View>
              

                </View>
          </View>
      
            
                
                <View style={styles.botaoalinhamento}>
                <View style={styles.btns}>
                   <TouchableOpacity style={styles.btnsaida} onPress>
                   <FontAwesome name="chevron-up" size={30}  width="100" color="#fff" style={{textAlign: 'center', padding:10}}/>
                       <Text style={styles.txtsaida}>SAÍDA</Text>
                   </TouchableOpacity >
                   <TouchableOpacity style={styles.btnentrada} onPress={Retorno}>
                        <FontAwesome name="chevron-down" size={30}  width="100" color="#fff"  style={{textAlign: 'center', padding:10}}/>
                       <Text style={styles.textretorno}>RETORNO</Text>
                   </TouchableOpacity>
               

             
                </View>
                <View style={styles.att}>
                 <TouchableOpacity style={styles.btnatt} onPress={Atender}>
                       <Text style={styles.txtatendimento}>ATENDIMENTO</Text>
                   </TouchableOpacity>
                </View>
                </View>
      
               

                <View style={styles.loja}>
                
                  
                    <Text style={styles.lojatxt}>LOJA: {data.titulo_loj}

                    
                    </Text>
                </View>
          

            </View>

      
            </View>
            </ScrollView>

    );
}

const styles = StyleSheet.create({

    cont:{
        width: '100%',
        flex: 1,
        backgroundColor: '#FFF',
    },
    card:{
        flex:1,
        width: '100%',
        justifyContent: 'center',
        marginTop:10,
        //elevation:2,
        padding:5,
        borderRadius:5,
        borderWidth:0.5,
        backgroundColor: '#fff',
    },
    alinhamento:{
        width:'100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',


    },
    capa:{
        height:100,
        width:100
    },
    locacao:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'#38a98d'
    },
    txtlocacao:{
        fontSize: 25,
        fontWeight: 'bold',
        padding:10,
        color:'#fff'
    },
    txtnome:{
        fontSize:18,
        color: '#000',
        padding:10,
        fontWeight: 'bold'
    },
    txtcpf:{
        fontSize:18,
        marginLeft:10,
        color: '#000',
        marginBottom:10


    },
    btn:{
        marginTop:7,

    },
    infoalinhamento:{
        width:'100%',
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:2,
        marginBottom:10
    },
    info:{
        backgroundColor: '#fff',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width:'100%',
        borderRadius:2,
        borderWidth:0.1
    },
    infoint:{
        backgroundColor: '#eee  ',
        width: '50%',
        alignItems: 'center'
    },
    infotxt:{
        fontSize: 18,
        color: '#000',
        padding:3,
        marginTop:3,
        fontWeight: 'bold'
    },
    btns:{
        backgroundColor: '#fff',
        width:'70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:100,
    
    },
    btnsaida:{
        backgroundColor: '#ff0000',
        width: '40%',
        height:100,
        justifyContent: 'center',
        borderRadius:5,
    },
    txtsaida:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },
    btnentrada:{
        backgroundColor: '#38a98d',
        width: '40%',
        height:100,
        justifyContent: 'center',
        borderRadius:5,
    },
    textretorno:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },
    btnatt:{
        backgroundColor: '#4169E1',
        width: '100%', 
        height:40,
        justifyContent: 'center',
        borderRadius:5
    },
    txtatendimento:{
        color: '#fff',
        textAlign: 'center',
        fontSize:18
    },
    loja:{
        backgroundColor: '#cfcfcf',
        marginTop:5,
        borderRadius:3,
        padding:5
    },
    lojatxt:{
        color: '#666668',
        padding:5,
        textAlign: 'center'
    },
    botaoalinhamento:{
        width:'100%',
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center'
    },
    att:{
        width:'70%',
        height:40,
        marginTop:10,
        backgroundColor: '#fff'
    },
    torquato:{
        color: '#D2691E'
    },
    pca14:{
        color: '#ff00ff'
    }

});

export default Locacoes;