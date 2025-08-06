import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaContactos from '../Contactos/ListaContactos';
import Nuevo from '../Contactos/NuevoContacto';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CONTACTOS" component={ListaContactos} />  
        <Stack.Screen name="NuevoContacto" component={Nuevo} /> 
      </Stack.Navigator>
    </NavigationContainer>
);
}