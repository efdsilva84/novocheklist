import React, { useState, useRef } from 'react';
import {View, Text, StatusBar, StyleSheet, TouchableOpacity, Modal, Image} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Feather from 'react-native-vector-icons/Feather';
export default function Camera(){
  const [ type, setType] = useState(RNCamera.Constants.Type.back);
  const camRef = useRef(null);
  const [fotoCapturada, setFotoCapturada] = useState(null);
  const [ open , setOpen ] = useState(false);

  async function takePicture(){
    if(camRef){
      const options ={ quality: 0.5, base64: true}
      const data = await camRef.current.takePictureAsync();
      setFotoCapturada(data.uri);
      setOpen(true);
      console.log(data);
    }
        
  }
  async function SalvePicture(){

  }

     return(

  
          <View style={styles.container}>
              <StatusBar hidden={false}/>
              <RNCamera style={styles.preview} type={type} flashMode={RNCamera.Constants.FlashMode.auto}
              androidCameraPermissionOptions={{
                title:"permissão para usar a câmera",
                message: 'precisamos usar a câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar'
              }}
              ref={camRef}
              >
                <View style={{flex:1, backgroundColor: 'transparent', flexDirection: 'row'}}> 
                    <TouchableOpacity style={{position: 'absolute', bottom:20, left:20}} onPress={()=>{
                      setType( type === RNCamera.Constants.Type.back
                      ? RNCamera.Constants.Type.front
                      : RNCamera.Constants.Type.back
                      )
                    }}>
                      
                      <Text style={{fontSize:20, marginBottom:13, color: '#fff'}}>Trocar</Text>
                    </TouchableOpacity>
                </View>
             

                <TouchableOpacity style={{marginBottom:13}} onPress={ takePicture}>
                 <Feather name="camera" size={35} color="#fff" />
                </TouchableOpacity>
              </RNCamera>
        

                { fotoCapturada &&
                <Modal animationType='slide' transparent={false} visible={open}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:20}}>
                      <View style={{margin:10, flexDirection: 'row'}}>
                      <TouchableOpacity style={{margin:10}} onPress={() => setOpen(false)}>
                            <Text style={{fontSize:30}}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:10}} onPress={() => SalvePicture }>
                            <Text style={{fontSize:30}}>SALVAR</Text>
                        </TouchableOpacity>
                      </View>
                

                    <Image style={{width: '100%', height:'100%', borderRadius:20}}
                      source={{uri: fotoCapturada}}
                    />


                    </View>
                </Modal>
                }
          </View>

    );


}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center'
  },
  preview:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture:{
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }
});
