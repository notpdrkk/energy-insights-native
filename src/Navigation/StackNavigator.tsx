import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/navigation";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { TabsNavigator } from "./TabsNavigator";

const Stack = createStackNavigator<RootStackParamList>();

export const StackRouters = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabsNavigator}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
  );
};