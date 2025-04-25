import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const TelaSobre = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Sobre os Desenvolvedores</Text>

    {/* Pedro */}
    <View style={styles.card}>
      <Image source={require('../assets/Pedro.png')} style={styles.headerImage} />
      <Text style={styles.detailText}>Nome: Pedro Luiz</Text>
      <Text style={styles.detailText}>Curso: Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.detailText}>Função: Mobile e API</Text>
    </View>

    {/* Lucas */}
    <View style={styles.card}>
      <Image source={require('../assets/Lucas.png')} style={styles.headerImage} />
      <Text style={styles.detailText}>Nome: Lucas</Text>
      <Text style={styles.detailText}>Curso: Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.detailText}>Função: Backend e Integrações</Text>
    </View>

    {/* Lari */}
    <View style={styles.card}>
      <Image source={require('../assets/Lari.png')} style={styles.headerImage} />
      <Text style={styles.detailText}>Nome: Larissa</Text>
      <Text style={styles.detailText}>Curso: Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.detailText}>Função: UI/UX e Frontend</Text>
    </View>

    <Text style={[styles.detailText, { textAlign: 'center', marginTop: 20 }]}>
      Projeto: Plataforma de Troca Cultural
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fefefe',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default TelaSobre;
