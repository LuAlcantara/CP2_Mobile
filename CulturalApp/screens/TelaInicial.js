import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import styles from '../styles'; // Importando estilos

const TelaInicial = ({ navigation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Culturas</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.cca3}
        renderItem={({ item }) => (
          <CountryCard
            country={item}
            onPress={() => navigation.navigate('Detalhes', { country: item })}
          />
        )}
        style={{ flex: 1 }}
      />
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.aboutButtonText}>Sobre os Desenvolvedores</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaInicial;