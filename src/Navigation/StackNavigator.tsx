import { createStackNavigator } from "@react-navigation/stack";
import { StackList } from "../@types/navigation";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";


const Stack = createStackNavigator<StackList>();

export const StackRouters = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};
