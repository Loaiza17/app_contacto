import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';
import NuevoContactos from './NuevoContacto';

export default function ListaContactos({ navigation }) {
  const [Contactos, setContactos] = useState([
    { id: 1, title: 'carlos', completed: false },
    { id: 2, title: 'Enviar email', completed: true },
    { id: 3, title: 'Leer documentación', completed: false },
  ]);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'pending' | 'completed'

  // Función para añadir una nueva tarea al estado
  const NuevoContactos = (Contactos) => {
    setContactos(prev => [...prev, Contactos]);
  };

  // Derivar listado según filtro
  let displayedContacto
  switch (filterMode) {
    case 'pending':
      displayedContacto = Contactos.filter(t => !t.completed);
      break;
    case 'completed':
      displayedContacto = Contactos.filter(t => t.completed);
      break;
    default:
      displayedContacto = Contactos;
  }

  return (
    <View style={styles.container}>
      <Text>CONTACTOS</Text>
      {/* Fila de botones de filtro */}
      <View style={styles.filterRow}>
        <Button
          title="Todas"
          onPress={() => setFilterMode('all')}
          color={filterMode === 'all' ? '#007AFF' : undefined}
        />
        <Button
          title="Pendientes"
          onPress={() => setFilterMode('pending')}
          color={filterMode === 'pending' ? '#007AFF' : undefined}
        />
        <Button
          title="Completadas"
          onPress={() => setFilterMode('completed')}
          color={filterMode === 'completed' ? '#007AFF' : undefined}
        />
      </View>

      {/* Lista filtrada */}
      <ScrollView style={styles.list}>
        {displayedContacto.map(Contactos => (
          <View key={Contactos.id} style={styles.ContactoRow}>
            <Text style={styles.icon}>
              {Contactos.completed ? '✅' : '⌛️'}
            </Text>
            <Text
              style={[
                styles.ContactoText,
                Contactos.completed ? styles.completedText : styles.pendingText,
              ]}
            >
              {Contactos.title}
            </Text>
          </View>
        ))}
      </ScrollView>

      
      <Button
        title="Crear nuevo contacto"
        onPress={() => navigation.navigate('NuevoContactos', { NuevoContactos })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 16, backgroundColor: '#fff' },
  filterRow:    { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  list:         { flex: 1, marginBottom: 12 },
  ContactoRow:      { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon:         { fontSize: 18, marginRight: 8 },
  ContactoText:     { fontSize: 16 },
  completedText:{ textDecorationLine: 'line-through', color: '#888' },
  pendingText:  { color: '#000' },
});
