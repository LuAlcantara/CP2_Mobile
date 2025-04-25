import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ícones do Material

import CountryCard from './components/CountryCard';
import TelaInicial from './screens/TelaInicial';
import TelaDetalhes from './screens/TelaDetalhes';
import TelaCompartilhar from './screens/TelaCompartilhar';
import TelaEventos from './screens/TelaEventos'; // agora representando "Artes"
import TelaSobre from './screens/TelaSobre';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Inicial" component={TelaInicial} />
    <Stack.Screen name="Detalhes" component={TelaDetalhes} />
    <Stack.Screen name="Sobre" component={TelaSobre} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: '#ff6f61' },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#FFC107',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Explorar') {
                iconName = 'explore';
              } else if (route.name === 'Compartilhar') {
                iconName = 'share';
              } else if (route.name === 'Artes') {
                iconName = 'palette'; // ícone artístico 🎨
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Explorar" component={MainStack} />
          <Tab.Screen name="Compartilhar" component={TelaCompartilhar} />
          <Tab.Screen name="Artes" component={TelaEventos} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
