import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles'; // Importando estilos

const TelaSobre = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' }}
      style={styles.headerImage}
    />
    <Text style={styles.title}>Sobre os Desenvolvedores</Text>
    <Image
      source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf25934f' }}
      style={styles.headerImage}
    />
    <Text style={styles.detailText}>Nome: [Seu Nome]</Text>
    <Text style={styles.detailText}>Curso: [Seu Curso]</Text>
    <Text style={styles.detailText}>Projeto: Plataforma de Troca Cultural</Text>
  </View>
);

export default TelaSobre;