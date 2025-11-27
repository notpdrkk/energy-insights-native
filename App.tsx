import React from "react";
import { AuthProvider } from "./src/Context/AuthContext";
import { EnergyProvider } from "./src/Context/EnergyContext"; 
import { AppNavigator } from "./src/Navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <EnergyProvider> 
        <AppNavigator />
      </EnergyProvider>
    </AuthProvider>
  );
}
