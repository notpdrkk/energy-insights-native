import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/Context/AuthContext";
import { StackRouters } from "./src/Navigation/StackNavigator";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackRouters />
      </NavigationContainer>
    </AuthProvider>
  );
}
