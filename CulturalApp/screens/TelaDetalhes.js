import React, { useState } from 'react';
import { ScrollView, Image, Text, View, Button, Linking, TouchableOpacity } from 'react-native';
import styles from '../styles'; // Importando estilos

const culturalData = {
  'Brazil': {
    traditions: 'Carnaval é uma das maiores festas populares, com samba e desfiles.',
    dish: 'Feijoada - um prato com feijão preto, carne de porco e acompanhamentos.',
    phrases: [
      { original: 'Olá', translation: 'Hello' },
      { original: 'Obrigado', translation: 'Thank you' },
    ],
  },
  'Japan': {
    traditions: 'Cerimônia do chá, uma prática tradicional de hospitalidade.',
    dish: 'Sushi - peixe cru com arroz temperado.',
    phrases: [
      { original: 'こんにちは (Konnichiwa)', translation: 'Hello' },
      { original: 'ありがとう (Arigatou)', translation: 'Thank you' },
    ],
  },
};

const TelaDetalhes = ({ route }) => {
  const { country } = route.params;
  const [ratings, setRatings] = useState([]);
  const [userRating, setUserRating] = useState(0);

  const handleRating = (rating) => {
    setUserRating(rating);
    setRatings([...ratings, rating]);
  };

  const averageRating = ratings.length > 0
    ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1)
    : 'Nenhuma avaliação';

  const cultureInfo = culturalData[country.name.common] || {
    traditions: 'Informações não disponíveis.',
    dish: 'Informações não disponíveis.',
    phrases: [],
  };

  const openWikipedia = () => {
    Linking.openURL(`https://en.wikipedia.org/wiki/${country.name.common}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: country.flags.png }} style={styles.detailImage} />
      <Text style={styles.title}>{country.name.common}</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1521335625595-1b9e74d0b72c' }}
        style={styles.detailImage}
      />
      <Text style={styles.detailText}>População: {country.population.toLocaleString()}</Text>
      <Text style={styles.detailText}>Idioma: {Object.values(country.languages)[0]}</Text>
      <Text style={styles.detailText}>Moeda: {Object.values(country.currencies)[0].name}</Text>
      <Text style={styles.subtitle}>Tradições Culturais</Text>
      <Text style={styles.detailText}>{cultureInfo.traditions}</Text>
      <Text style={styles.subtitle}>Prato Típico</Text>
      <Text style={styles.detailText}>{cultureInfo.dish}</Text>
      <Text style={styles.subtitle}>Frases Básicas</Text>
      {cultureInfo.phrases.length > 0 ? (
        cultureInfo.phrases.map((phrase, index) => (
          <View key={index} style={styles.phraseContainer}>
            <Text style={styles.detailText}>{phrase.original} - {phrase.translation}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.detailText}>Nenhuma frase disponível.</Text>
      )}
      <Text style={styles.subtitle}>Recomenda visitar este país?</Text>
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map(star => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Text style={styles.star}>{star <= userRating ? '★' : '☆'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.detailText}>Média das avaliações: {averageRating} estrelas</Text>
      <Button title="Ver na Wikipedia" onPress={openWikipedia} color="#ff6f61" />
    </ScrollView>
  );
};

export default TelaDetalhes;