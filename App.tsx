import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/Context/AuthContext";


import { Login } from "./src/Pages/Login";
import { Cadastro } from "./src/Pages/Cadastro";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown:false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}