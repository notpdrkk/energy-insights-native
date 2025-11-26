import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplianceProvider } from "./src/Context/EnergyContext/index";

import Home from "./src/Pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplianceProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplianceProvider>
  );
}
