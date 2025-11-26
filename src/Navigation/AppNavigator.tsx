import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { StackRouters } from "./StackNavigator";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackRouters/>
    </NavigationContainer>
  );
};
