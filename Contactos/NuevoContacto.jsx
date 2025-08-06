import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

export default function NuevoContacto({ navigation, route }) {
  const [title, setTitle] = useState('');

  // Recuperamos la función addTask pasada desde TaskListScreen
  const { NuevoContactos } = route.params || {};

  const isValid = title.trim().length >= 3;

  const handleAdd = () => {
    if (!isValid) {
      Alert.alert('Error', 'El título debe tener al menos 3 caracteres.');
      return;
    }
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    // Llamamos al callback sólo si existe
    if (typeof NuevoContactos=== 'function') {
      NuevoContactos(newTask);
    } else {
      console.warn('NuevoContacto no está definido');
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear Nuevo Contacto</Text>

      <TextInput
        style={styles.input}
        placeholder="nombre de contacto (mín. 1 caracteres)"
        value={title}
        onChangeText={setTitle}
      />

      { !isValid && title.length > 0 && (
        <Text style={styles.errorText}>
          El nombre debe tener al menos 1 caracteres.
        </Text>
      )}

      <View style={styles.buttons}>
        <Button
          title="Agregar contacto"
          onPress={handleAdd}
          disabled={!isValid}
        />
        { title.length > 0 && (
          <Button
            title="Limpiar"
            onPress={() => setTitle('')}
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