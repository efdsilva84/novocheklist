// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../list/src/screens/Login';
import Home from '../list/src/screens/Home';
import Camera from './src/screens/Camera';
import Checklist from './src/screens/Checklist';
import Atendimento from '../list/src/screens/Atedimento';
import Preload from './src/screens/Preload';
import AuthProvider from './src/contexts/auth';
import SearchProvider from './src/contexts/search';
const Stack = createNativeStackNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (
           <NavigationContainer>
             <SearchProvider>
                <AuthProvider>
                  <StatusBar backgroundColor="#000" barStyle='light-content' />
                   <Stack.Navigator>
                    <Stack.Screen initialRouteName="Preload"   name="Preload" component={Preload} options={{headerShown:false}}/>
                      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                    <Stack.Screen  name="Home" component={Home} options={{
               headerStyle:{backgroundColor: '#38a98d'},headerTintColor: '#fff', title: 'Locação KL'
             }}/>
                   <Stack.Screen  name="Atendimento" component={Atendimento} options={{
                headerStyle:{backgroundColor: '#4169E1'}, headerTintColor: '#fff', title: 'Atendimento'
               }} />
       
          <Stack.Screen name="Checklist" component={Checklist} />
          <Stack.Screen name="Camera" component={Camera} options={{headerShown:false}}  />
        </Stack.Navigator>
        </AuthProvider>
        </SearchProvider>
    </NavigationContainer>
   
  );
}

export default App;