import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { styles } from "./style" 
import { GoogleButton } from "../../Components/GoogleButton";
import { AppleButton } from "../../Components/AppleButton";

interface LoginProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}
export function Login({ navigation }: LoginProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    const handleLogin = (): void => {
        if (isLoading) return;

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            
            Alert.alert("Sucesso", "Login concluído!"); 
            

        }, 3000);
    };

    const handleNavigateToCadastro = (): void => {
        navigation.navigate("Cadastro");
    };
  return (
    
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={styles.container} >
        
          <View style={styles.header}>
            <Text style={styles.logo}>Energy Electric </Text>
            <Text style={styles.title} >Login</Text>
          </View>
        
          
          <TextInput 
            placeholder="email@dominio.com"
            placeholderTextColor="#999"
            style={styles.input}
          />
          
          <TextInput 
            placeholder="••••••••"
            placeholderTextColor="#999"
            secureTextEntry={true}
            style={styles.input}
          />

          <TouchableOpacity 
            style={[styles.button, isLoading && styles.buttonDisabled]} 
            onPress={handleLogin} 
            disabled={isLoading} 
          >
            {isLoading ? (
                
                <View style={styles.buttonContent}>
                    <ActivityIndicator color="#FFF" style={{ marginRight: 8 }} />
                    <Text style={styles.buttonText}>Entrando...</Text>
                </View>
            ) : (
                
                <Text style={styles.buttonText}>Continuar</Text>
            )}
          </TouchableOpacity>

          <View style={styles.OuContainer}>
            <View style={styles.line}/>
                <Text style={styles.OuText}>OU</Text>
            <View style={styles.line}/>
          </View>

          <GoogleButton
            title="Entrar com Google"
            icon={require("../../../assets/images-removebg-preview.png")}
            onPress={() => {
            console.log("Entrar com Google ");
            }}
          />

          <AppleButton
            title="Entrar com Apple"
            icon={require("../../../assets/icone-apple-symbole-logo-noir-removebg-preview copy.png")}
            onPress={() => console.log("Entrar com Apple")}
          />
      
          <Text style={styles.footerText}>
            Não tem conta? <Text  style={styles.link} onPress={() => navigation.navigate("Cadastro")}>Clique aqui</Text>
          </Text>
      </View>
    </ScrollView>
  );
}
