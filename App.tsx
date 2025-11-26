import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./src/context/AuthContext";

import { Login } from "./src/screens/Login";
import { Cadastro } from "./src/screens/Cadastro";
import Dashboard from "./src/screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown:false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
