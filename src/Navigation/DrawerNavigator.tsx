import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { Perfil } from '../Pages/Perfil';
import ConsumoScreen from '../Pages/Consumo';
import { Integrantes } from '../Pages/Integrantes';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('TabPerfil')}>
        Integrantes
      </Button>
    </View>
  );
}

function PerfilScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()}>Go back home</Button>
    </View>
  );
}

const Drawer = createDrawerNavigator({
  screens: {
    Perfil: Perfil,
    ConsumoScreen: ConsumoScreen,
    Integrantes: Integrantes,
  },
});

const Navigation = createStaticNavigation(Drawer);

export default function App() {
  return <Navigation />;
}