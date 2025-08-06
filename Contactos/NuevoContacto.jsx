import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert, Switch
} from 'react-native';

export default function Nuevo({ navigation, route }) {
  const [Nombre, setNombre] = useState('');
  const [Numero, setNumero] = useState('');
  const [Estado, setEstado] = useState(false);


 
  const { NuevoContactos } = route.params || {};

  const isValid = Nombre.trim().length >= 1;

  const handleAdd = () => {
    if (!isValid) {
      Alert.alert('Error', 'El Nombre debe tener al menos 1 caracter.');
      return;
    }

    const NuevoContacto = {
      id: Date.now(),
      Nombre: Nombre.trim(),
      Numero: Numero.trim(),
      Estado: Estado,
    };


    if (typeof NuevoContactos === 'function') {
      NuevoContactos(NuevoContacto);
    } else {
      console.warn('NuevoContactos no está definido');
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear Nuevo Contacto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del contacto "
        value={Nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Numero de contacto"
        keyboardType='numeric'
        value={Numero}
        onChangeText={setNumero}
      />


      { !isValid && Nombre.length > 0 && (
        <Text style={styles.errorText}>
          El título debe tener al menos 1 caracter.
        </Text>
      )}
      
      <View style={styles.switchRow}>
        <Text style={styles.statusText}>
          {Estado ? '⭐ favorito' : '🗃️ no favorito'}
        </Text>
        <Switch value={Estado} onValueChange={setEstado} />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Agregar contacto"
          onPress={handleAdd}
          disabled={!isValid}
        />
        { Nombre.length > 0 && (
          <Button
            title="Limpiar"
            onPress={() => setNombre('')}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 16, backgroundColor: '#fff' },
  header:     { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input:      {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  errorText:  { color: 'red', marginBottom: 8 },
  buttons:    { flexDirection: 'row', justifyContent: 'space-between' },
});