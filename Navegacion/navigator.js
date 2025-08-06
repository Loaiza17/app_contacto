import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaContactos from '../Contactos/ListaContactos';
import NuevoContactos from '../Contactos/NuevoContacto';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CONTACTOS" component={ListaContactos} />  
        <Stack.Screen name="NuevoContactos" component={NuevoContactos} />
      </Stack.Navigator>
    </NavigationContainer>
);
}