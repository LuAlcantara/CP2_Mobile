import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from '../styles'; // Importando estilos

const TelaCompartilhar = () => {
  const [experience, setExperience] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photo, setPhoto] = useState(null);

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

  const handleSubmit = () => {
    if (experience.trim() && selectedCountry) {
      setPosts([
        ...posts,
        {
          country: selectedCountry,
          text: experience,
          photo: photo || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          likes: 0,
        },
      ]);
      setExperience('');
      setPhoto(null);
      setSelectedCountry('');
    }
  };

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Compartilhe sua Experiência</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Selecione um país" value="" />
        {countries.map(country => (
          <Picker.Item
            key={country.cca3}
            label={country.name.common}
            value={country.name.common}
          />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Conte sobre sua experiência cultural..."
        value={experience}
        onChangeText={setExperience}
        multiline
      />
      <Button title="Enviar" onPress={handleSubmit} color="#ff6f61" />
      <Text style={styles.subtitle}>Postagens</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.experienceCard}>
            <Text style={styles.detailText}>{item.country}</Text>
            <Image source={{ uri: item.photo }} style={styles.postImage} />
            <Text style={styles.detailText}>{item.text}</Text>
            <View style={styles.likeContainer}>
              <TouchableOpacity onPress={() => handleLike(index)}>
                <Text style={styles.likeButton}>Curtir</Text>
              </TouchableOpacity>
              <Text style={styles.detailText}>{item.likes} curtidas</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TelaCompartilhar;