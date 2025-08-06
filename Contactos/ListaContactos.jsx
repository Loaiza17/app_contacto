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
    { id: 1, Nombre: 'carlos', Estado: false, Numero:3156548975},
    { id: 2, Nombre: 'David', Estado: true, Numero:3659856214},
    { id: 3, Nombre: 'Juan', Estado: false, Numero:3112569862},
  ]);
  const [filterMode, setFilterMode] = useState('all'); 

  // Función para añadir una nueva tarea al estado
  const NuevoContactos = (Contactos) => {
    setContactos(prev => [...prev, Contactos]);
  };

  // Derivar listado según filtro
  let displayedContacto
  switch (filterMode) {
    case 'pending':
      displayedContacto = Contactos.filter(t => !t.Estado);
      break;
    case 'Estado':
      displayedContacto = Contactos.filter(t => t.Estado);
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
          onPress={() => setFilterMode('Estado')}
          color={filterMode === 'Estado' ? '#007AFF' : undefined}
        />
      </View>

      {/* Lista filtrada */}
      <ScrollView style={styles.list}>
        {displayedContacto.map(Contactos => (
          <View key={Contactos.id} style={styles.ContactoRow}>
            <Text style={styles.icon}>
              {Contactos.Estado ? '✅' : '⌛️'}
            </Text>
            <Text
              style={[
                styles.ContactoText,
                Contactos.Estado ? styles.EstadoText : styles.pendingText,
              ]}
            >
              {Contactos.Nombre}
            </Text>

            <Text>
              {"  "}
            </Text>

            <Text
              style={[
                styles.ContactoText,
                Contactos.Estado ? styles.EstadoText : styles.pendingText,
              ]}
            >
              {Contactos.Numero}
            </Text>
          </View>
        ))}
      </ScrollView>

      
      <Button
        title="Crear nuevo contacto"
        onPress={() => navigation.navigate('NuevoContacto', { NuevoContacto })}
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
  EstadoText:{ color: '#888' },
  pendingText:  { color: '#000' },
});
