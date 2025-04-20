import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const CountryCard = ({ country, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.experienceCard}>
    <Image source={{ uri: country.flags.png }} style={styles.postImage} />
    <Text style={styles.detailText}>{country.name.common}</Text>
  </TouchableOpacity>
);

export default CountryCard;