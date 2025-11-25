import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../Pages/Login';
import { Cadastro } from '../Pages/Cadastro';
import { TabsNavigator } from './TabsNavigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Group>
            <Stack.Screen name = "Login" component ={Login}/>
            <Stack.Screen name = "Cadastro" component ={Cadastro}/>
          </Stack.Group>

          <Stack.Screen name = "Main" component={TabsNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

