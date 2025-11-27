import React, { useState, useContext } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Image } from "react-native";
import { styles } from "./style";
import { AuthContext } from "../../Context/AuthContext";

interface Props {
  navigation: any;
}

export function Login({ navigation }: Props) {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await loginUser(email, senha);
      setIsLoading(false);
      navigation.navigate("MainDrawer");
    } catch (err) {
      setIsLoading(false);
      Alert.alert("Erro", "Email ou senha incorretos");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Energy Electric</Text>
          <Text style={styles.subtitle}>Login</Text>
        </View>

        <TextInput
          placeholder="email@dominio.com"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="••••••••"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <View style={styles.buttonContent}>
            {isLoading && <ActivityIndicator color="#FFF" style={{ marginRight: 10 }} />}
            <Text style={styles.buttonText}>{isLoading ? "Entrando..." : "Continuar"}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.OuContainer}>
          <View style={styles.line} />
          <Text style={styles.OuText}>OU</Text>
          <View style={styles.line} />
        </View>


        <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
          <TouchableOpacity style={styles.socialButton} onPress={() => Alert.alert("Google")}>
            <Image source={require("../../../assets/images-removebg-preview.png")} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => Alert.alert("Apple")}>
            <Image source={require("../../../assets/icone-apple-symbole-logo-noir-removebg-preview copy.png")} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}>
          <Text style={styles.footerText}>Não tem conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("StackCadastro")}>
            <Text style={styles.link}>Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
