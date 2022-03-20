import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Button, Switch } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';






function Checklist({ route }) {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    const [documento, setDocumento] = useState(false);
    const [tapete, setTapete] = useState(false);
    const [som, setSom] = useState(false);
    const [calotas, setCalotas] = useState(false);
    const [estepe, setEstepe] = useState(false);
    const [chaveroda, setChaveroda] = useState(false);
    const [macaco, setMacaco] = useState(false);
    const [triangulo, setTriangulo] = useState(false);
    const [adesivo, setAdesivo] = useState(false);
    const [antena, setAntena] = useState(false);
    const [manual, setManual] = useState(false);
    const [catalizador, setCatalizador] = useState(false);
    
    const [listaFotos, setListaFotos] = useState([
        { title: 'fotoFrente', url: null },
        { title: 'fotoTraseira',  url: null  }
    ]);










    const takePhotoFromCamera1 = () => {
        console.log(fotoFrente);
        ImagePicker.openCamera({
            //width: 600,
            //height: 1000,
            cropping: false,
        }).then(fotoFrente => {
            console.log(fotoFrente);
            setFotoFrente(fotoFrente.path);
        });



    }
    const takePhotoFromCamera = (tipoFoto) => {
        console.log(tipoFoto);
        ImagePicker.openCamera({
            //width: 600,
            //height: 1000,
            cropping: false,
        }).then(fotoCamera => {
            console.log(fotoCamera);
            let novaLista = [];
            let index = listaFotos.map(function (x, i) { 
                novaLista[i] = x;
                return x.title;
             }).indexOf(tipoFoto);

            novaLista[index].url = fotoCamera.path
            setListaFotos(novaLista);
            console.log(listaFotos);

        });



    }







    return (
        <ScrollView style={styles.container}>
            <View style={styles.check}>
                <View style={styles.titulo}>
                    <Text style={styles.texto}>CHECKLIST RETORNO</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.loc}>Locação: {route.params.loca}</Text>
                    <Text style={styles.cli}>Cliente: {route.params.nome}</Text>
                </View>


                <View style={styles.boxes}>
                    <View style={styles.linhabox}>
                        <View style={styles.box}>
                            <Text style={styles.label}>{documento ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={documento}
                                onValueChange={setDocumento}
                            />
                            <Text style={styles.label}>Documento</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>{tapete ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={tapete}
                                onValueChange={setTapete}
                            />
                            <Text style={styles.label}>Tapete</Text>

                        </View>

                    </View>
                    <View style={styles.linhabox}>
                        <View style={styles.box}>
                            <Text style={styles.label}>{som ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={som}
                                onValueChange={setSom}
                            />
                            <Text style={styles.label}>Som</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>{calotas ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={calotas}
                                onValueChange={setCalotas}
                            />
                            <Text style={styles.label}>Calotas</Text>

                        </View>

                    </View>
                    <View style={styles.linhabox}>
                        <View style={styles.box}>
                            <Text style={styles.label}>{estepe ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={estepe}
                                onValueChange={setEstepe}
                            />
                            <Text style={styles.label}>Estepe</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>{chaveroda ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={chaveroda}
                                onValueChange={setChaveroda}
                            />
                            <Text style={styles.label}>Chave de Roda</Text>

                        </View>

                    </View>
                    <View style={styles.linhabox}>
                        <View style={styles.box}>
                            <Text style={styles.label}>{macaco ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={macaco}
                                onValueChange={setMacaco}
                            />
                            <Text style={styles.label}>Macaco</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>{triangulo ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={triangulo}
                                onValueChange={setTriangulo}
                            />
                            <Text style={styles.label}>Triângulo</Text>

                        </View>

                    </View>
                    <View style={styles.linhabox}>
                        <View style={styles.box}>
                            <Text style={styles.label}>{adesivo ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={adesivo}
                                onValueChange={setAdesivo}
                            />
                            <Text style={styles.label}>Adesivo</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>{antena ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={antena}
                                onValueChange={setAntena}
                            />
                            <Text style={styles.label}>Antena</Text>

                        </View>

                    </View>
                    <View style={styles.linhabox}>
                        <View style={styles.box}>
                            <Text style={styles.label}>{manual ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={manual}
                                onValueChange={setManual}
                            />
                            <Text style={styles.label}>Manual</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>{catalizador ? "👍" : "👎"}</Text>
                            <CheckBox
                                value={catalizador}
                                onValueChange={setCatalizador}
                            />
                            <Text style={styles.label}>catalizador</Text>

                        </View>

                    </View>



                </View>
                <View style={styles.inputs}>
                    <TextInput editable={false} selectTextOnFocus={false} style={styles.inp} placeholder="ÚLTIMA KM" >{route.params.oleo}</TextInput>
                    <TextInput style={styles.inp1} placeholder="KM ATUAL" />

                </View>
                <View style={styles.avaria}>
                    <TextInput placeholder="Pesquisar Avarias" />
                </View>
                <View style={styles.fotos}>
                    <View style={styles.ft}>
                        <Text style={styles.txtfotos}>Fotos</Text>
                    </View>

                    <View style={styles.areafoto}>

                        {listaFotos.map((moldura, i) => {

                            return (
                                <View key={moldura.title} style={styles.foto}>
                                       
                                    <Image style={{ borderRadius: 5, borderWidth: 0.5, borderColor: '#fff', width: 100, height: 160, }}
                                        resizeMode="contain" source={{uri:moldura.url}}
                                    />
                                    <TouchableOpacity style={styles.icone} onPress={() => {
                                        takePhotoFromCamera(moldura.title);
                                    }}>
                                        <Feather name="camera" size={25} />
                                    </TouchableOpacity>
                                </View>)

                        })}


                    </View>

                </View>
                <TouchableOpacity style={styles.assinatura}>
                    <Text style={styles.assinaturatxt}>Ass Cliente: {route.params.nome}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textobtn}>VER CHECKLIST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textobtn}>FINALIZAR</Text>
                </TouchableOpacity>



            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    check: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topo: {
        backgroundColor: '#fff',
        width: '45%'
    },
    titulo: {
        width: '95%',
        backgroundColor: '#38a98d',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 20
    },
    texto: {
        padding: 10,
        textAlign: 'center',
        fontSize: 25,
        color: '#fff'
    },
    txt: {
        width: '95%',
        backgroundColor: '#eee',
        borderRadius: 5
    },
    loc: {
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    cli: {
        fontSize: 20,
        padding: 10
    },
    btn: {
        width: '95%',
        backgroundColor: '#38a98d',
        height: 50,
        marginTop: 20,
        justifyContent: 'center'
    },
    boxes: {
        backgroundColor: '#eee',
        width: '95%',
        marginTop: 20,
        padding: 10,
    },
    box: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    linhabox: {
        flexDirection: 'row',
    },
    label: {
        marginTop: 10
    },
    textobtn: {
        fontSize: 25,
        color: "#fff",
        textAlign: 'center'
    },
    inputs: {
        width: '95%',
        flexDirection: 'row',
        marginTop: 20,
    },
    inp: {
        backgroundColor: '#eee',
        width: '48%',
        padding: 10,
        color: '#000',
        marginRight: '1%',
        borderRadius: 3


    },
    inp1: {
        backgroundColor: '#eee',
        width: '48%',
        padding: 10,
        color: '#000',
        marginLeft: '3%',
        borderRadius: 3


    },
    avaria: {
        borderWidth: 0.5,
        width: '95%',
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 5,
        padding: 3
    },
    areafoto: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 50
    },
    fotos: {
        width: '95%',
        marginTop: 20,
    },
    foto: {
        width: '25%',
        height: 160,
        borderWidth: 0.3,
        borderRadius: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    fotos: {
        width: '95%',
        marginTop: 10,
    },
    txtfotos: {
        padding: 5,
        fontSize: 15,
        color: '#000'
    },
    ft: {
        borderWidth: 0.5
    },
    icone: {
        height: 40,
        backgroundColor: '#FFF',
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    assinatura: {
        width: '95%',
        flex: 1,
        height: 50,
        backgroundColor: 'green',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    assinaturatxt: {
        fontSize: 16,
        color: '#fff',
    }

})
export default Checklist;