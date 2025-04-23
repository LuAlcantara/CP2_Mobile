import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles'; // Importando estilos

const TelaEventos = () => {
  const events = [
    { id: '1', name: 'Festival Cultural', date: '10/05/2025', location: 'São Paulo', description: 'Um festival com música e dança.' },
    { id: '2', name: 'Exposição de Arte', date: '15/05/2025', location: 'Rio de Janeiro', description: 'Exposição de arte local.' },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://unsplash.com/pt-br/fotografias/um-grupo-de-pessoas-observando-um-dragao-flutuar-por-uma-rua-9wQ5TwdV5sgr' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Eventos Culturais</Text>
      <Image
        source={{ uri: 'https://unsplash.com/pt-br/fotografias/um-grupo-de-pessoas-caminhando-por-uma-rua-r3GdQ9XjGMU' }}
        style={styles.headerImage}
      />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.experienceCard}>
            <Text style={styles.detailText}>{item.name}</Text>
            <Text style={styles.detailText}>Data: {item.date}</Text>
            <Text style={styles.detailText}>Local: {item.location}</Text>
            <Text style={styles.detailText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TelaEventos;