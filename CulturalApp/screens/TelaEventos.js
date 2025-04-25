import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const TelaArtesCulturais = () => {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const buscarObras = async () => {
      try {
        const resposta = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=culture');
        const ids = resposta.data.objectIDs.slice(0, 5); // Pega apenas 5 obras

        const detalhesObras = await Promise.all(
          ids.map(async (id) => {
            const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
            return res.data;
          })
        );

        setObras(detalhesObras);
      } catch (erro) {
        console.error('Erro ao buscar obras culturais:', erro);
      }
    };

    buscarObras();
  }, []);

  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Artes Culturais</Text>
      {obras.map((item) => (
        <TouchableOpacity
          key={item.objectID}
          onPress={() => abrirLink(item.objectURL)}
          style={styles.experienceCard}
        >
          {item.primaryImageSmall ? (
            <Image
              source={{ uri: item.primaryImageSmall }}
              style={{ height: 200, borderRadius: 8 }}
            />
          ) : null}
          <Text style={styles.detailText}>{item.title}</Text>
          <Text style={styles.detailText}>Cultura: {item.culture || 'Não informado'}</Text>
          <Text style={styles.detailText}>Período: {item.period || 'Não informado'}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TelaArtesCulturais;
