import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet,Image, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';




export default ( )=>{


        return(
            <View style={styles.container}> 
                <LinearGradient colors={['#38a98de6', '#38a98dcc', '#ffffffb3']} style={{flex:1, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require("../../assets/img/kll.png")} style={{width:'55%', height:80, paddingBottom:30}}  />
                  <ActivityIndicator size="large" color="#fff" style={{marginTop:100}} />
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