import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { AppleButton } from './../../Components/AppleButton/index';
import { GoogleButton } from './../../Components/GoogleButton/index';
import { styles } from './style';

interface LoginProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

export function Login({ navigation }: LoginProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = () => {
        if (isLoading) return;

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Alert.alert("Sucesso", "Login concluído!");
        }, 3000);
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
                />

                <TextInput
                    placeholder="••••••••"
                    placeholderTextColor="#999"
                    secureTextEntry
                    style={styles.input}
                />

                {/* BOTÃO PRINCIPAL */}
                <TouchableOpacity
                    style={[styles.button, isLoading && styles.buttonDisabled]}
                    onPress={handleLogin}
                    disabled={isLoading}
                >
                    <View style={styles.buttonContent}>
                        {isLoading && (
                            <ActivityIndicator color="#FFF" style={{ marginRight: 10 }} />
                        )}
                        <Text style={styles.buttonText}>
                            {isLoading ? "Entrando..." : "Continuar"}
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* OU */}
                <View style={styles.OuContainer}>
                    <View style={styles.line} />
                    <Text style={styles.OuText}>OU</Text>
                    <View style={styles.line} />
                </View>

                <GoogleButton
                    title="Entrar com Google"
                    icon={require("../../../assets/images-removebg-preview.png")}
                    onPress={() => console.log("Entrar com Google")}
                />

                <AppleButton
                    title="Entrar com Apple"
                    icon={require("../../../assets/icone-apple-symbole-logo-noir-removebg-preview copy.png")}
                    onPress={() => console.log("Entrar com Apple")}
                />

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={styles.footerText}>Não tem conta? </Text>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={styles.link}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
