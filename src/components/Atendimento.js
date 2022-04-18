import React,{ useState } from 'react';
import { View, Text } from 'react-native';
import Locacoes from './Locacoes';

function Atendimento({data}) {
  
 return (
     <View>
        <Text>Atendimento{data.id_loc}</Text>
        
     </View>
  
  );
}
export default Atendimento;
