import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/navigation";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { DrawerRouters } from "./DrawerNavigator";

const Stack = createStackNavigator<RootStackParamList>();

export const StackRouters = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login}/>
      <Stack.Screen name="StackCadastro" component={Cadastro}/>
      <Stack.Screen name="MainDrawer" component={DrawerRouters}/>
    </Stack.Navigator>
  );
};
