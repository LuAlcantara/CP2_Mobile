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
        source={{ uri: 'https://images.unsplash.com/photo-1517457373958-b96c0d8e13c8' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Eventos Culturais</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1501386760812-8a405693a775' }}
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