import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../Pages/Login';
import { Home } from '../Pages/Home';
import { Cadastro } from '../Pages/Cadastro';
import { Integrantes } from '../Pages/Integrantes';
import { Perfil } from '../Pages/Perfil';
import ConsumoScreen from "../Pages/Consumo";
import HistoricoScreen from "../Pages/Historico";
import RankingScreen from "../Pages/Ranking";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Perfil" component={Perfil} />
         <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Integrantes" component={Integrantes} />
        <Stack.Screen name="Consumo" component={ConsumoScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
        <Stack.Screen name="Ranking" component={RankingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

