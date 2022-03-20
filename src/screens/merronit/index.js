import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'

export default ()=>{
    const navigation = useNavigation();


    function next(){
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
            <LinearGradient colors={['#ff0000e6', '#ffffffcc', '#32CD32b3']} style={{flex:1, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require("../../assets/img/kll.png")} style={{width:'85%', height:120}} />

            <View style={styles.int}>
            <Text>Usuário</Text>
            <TextInput style={styles.input} />
            <Text>Senha</Text>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.btn} onPress={next}>
                <Text style={styles.txt}>ENTRAR</Text>
            </TouchableOpacity>


            </View>
                
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32CD32'
    },
    int:{
        width: '97%',
        backgroundColor: '#32CD32',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop:20,
        borderRadius:10,
    
    },
    input:{
        backgroundColor: '#fff',
        width: '85%',
        borderRadius:3,
        padding:10
    },
    btn:{
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        marginTop:17,
        borderRadius:3,
        justifyContent: 'center'

    },
    txt:{
        textAlign: 'center',
        fontSize:25,
        fontWeight: 'bold'
    }
})