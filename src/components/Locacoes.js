import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 function Locacoes({data}) {
    const navigation = useNavigation();
    const [ visibleModal, setVisibleModal ] = useState(false);
    const [ modalAtendimento, setModalAtendimento ] = useState(false);

 
    function Atender(){
        navigation.navigate('Atendimento',{loca: data.id_Loc, nome: data.nome_cli, cnh: data.habilitacao_cli,
            foto: data.foto, oleo: data.oleo_km_car, cliente: data.id_cli
        });
    }

    function Retorno(){
        navigation.navigate('Checklist',{loca: data.id_Loc, nome: data.nome_cli, oleo: data.oleo_km_car});
    }


 




    return(
        <ScrollView style={styles.cont} showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <View style={styles.locacao}>
                    <Text style={styles.txtlocacao}>Locação : {data.id_Loc}</Text>
                    <TouchableOpacity style={styles.btn}>
                         <FontAwesome name="folder-open" size={30}  width="100" color="#000"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoint}>
                        <Text style={styles.infotxt}>Placa : {data.placa_car}</Text>
                         <Text style={styles.infotxt}>Modelo : {data.modelo_car}</Text>
                        <Text style={styles.infotxt}>Cor : {data.cor_car}</Text>
                    </View>
                    <View style={styles.capa}>
                        <Image source={{uri: data.foto}} style={styles.capa}/>
                    </View>
              

                </View>
                <View style={styles.loja}>
                    <Text style={styles.lojatxt}>LOJA: {data.titulo_loj}</Text>
                </View>
                <Text style={styles.txtnome}>Nome : {data.nome_cli}</Text>
                <Text style={styles.txtcpf}>CPF : {data.cpf_cli}</Text>

                <View style={styles.btns}>
                   <TouchableOpacity style={styles.btnsaida} onPress>
                   <FontAwesome name="chevron-up" size={30}  width="100" color="#fff" style={{textAlign: 'center', padding:10}}/>
                       <Text style={styles.txtsaida}>SAÍDA</Text>
                   </TouchableOpacity >
                   <TouchableOpacity style={styles.btnentrada} onPress={Retorno}>
                        <FontAwesome name="chevron-down" size={30}  width="100" color="#fff"  style={{textAlign: 'center', padding:10}}/>
                       <Text style={styles.textretorno}>RETORNO</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btnatt} onPress={Atender}>
                   <FontAwesome name="users" size={30}  width="100" color="#fff"  style={{textAlign: 'center', padding:10}}/>
                       <Text style={styles.txtatendimento}>ATENDIMENTO</Text>
                   </TouchableOpacity>

                </View>

              
          

            </View>

      
    
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    cont:{
        width: '100%',
        flex: 1
    },
    card:{
        margin: 15,
        //elevation:2,
        borderWidth:1,
        padding:5,
        borderRadius:5,

    },
    capa:{
        height:100,
        width:100
    },
    locacao:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtlocacao:{
        fontSize: 25,
        fontWeight: 'bold',
        padding:10,
        color:'#000'
    },
    txtnome:{
        fontSize:18,
        color: '#000',
        padding:10
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
    info:{
        backgroundColor: '#eee',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
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
        marginTop:3
    },
    btns:{
        backgroundColor: '#FFf',
        flexDirection: 'row',
        height:100
    },
    btnsaida:{
        backgroundColor: '#ff0000',
        width: '20%',
        justifyContent: 'center',
        borderRadius:5,
        marginRight: '5%'
    },
    txtsaida:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    btnentrada:{
        backgroundColor: '#38a98d',
        width: '20%',
        justifyContent: 'center',
        borderRadius:5,
        marginRight: '5%'
    },
    textretorno:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    btnatt:{
        backgroundColor: '#4169E1',
        width: '50%', 
        justifyContent: 'center',
        borderRadius:5
    },
    txtatendimento:{
        color: '#fff',
        textAlign: 'center',
        fontSize:18
    },
    loja:{
        backgroundColor: '#38a98d',
        marginTop:5,
        borderRadius:3
    },
    lojatxt:{
        color: '#fff',
        padding:5,
        textAlign: 'center'
    }

});

export default Locacoes;