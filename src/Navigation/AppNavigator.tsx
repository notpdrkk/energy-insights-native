import { NavigationContainer } from "@react-navigation/native";
import { StackRouters } from "./StackNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackRouters/>
    </NavigationContainer>
  );
};