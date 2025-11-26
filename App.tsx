import React from "react";
import { AuthProvider } from "./src/Context/AuthContext";
import { ApplianceProvider } from "./src/Context/EnergyContext"; 
import { AppNavigator } from "./src/Navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <ApplianceProvider>   
        <AppNavigator />
      </ApplianceProvider>
    </AuthProvider>
  );
}