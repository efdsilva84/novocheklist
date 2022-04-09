import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'

function Preload(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image source={require("../../assets/img/kll.png")} style={{width:'80%'}} resizeMode="contain"
                animation="flipInY"
                
                />
            </View>

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>APP CHECKLIST KL</Text>
                <Text style={styles.txt}>Faça Login para começar...</Text>
                <TouchableOpacity style={styles.buttom} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.buttomText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a98d'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#38a98d',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerForm:{
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop:28,
        marginBottom:12

    },
    txt:{
        color: '#a1a1a1'
    },
    buttom:{
        position: 'absolute',
        backgroundColor: '#38a98d',
        borderRadius:50,
        paddingVertical:8,
        width:'80%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomText:{
        fontSize:18,
        color: '#fff',
        fontWeight: 'bold'
    }
})
export default Preload;