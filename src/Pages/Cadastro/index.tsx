import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { styles } from "./style";

export const Cadastro: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleCadastro = (): void => {
        if (isLoading) return; 

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Alert.alert("Sucesso", "Cadastro concluído!");
        }, 3000);
    };
    
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Energy Electric</Text>
                <Text style={styles.title}>Criar uma conta</Text>
                <Text style={styles.subtitle}>Insira seu email para se cadastrar</Text>
            </View>

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.half]}
                    placeholder="Nome"
                    placeholderTextColor="#A3A3A3"
                />

                <TextInput
                    style={[styles.input, styles.half]}
                    placeholder="Sobrenome"
                    placeholderTextColor="#A3A3A3"
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="email@dominio.com"
                placeholderTextColor="#A3A3A3"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry
            />

            <TouchableOpacity 
                style={[styles.button, isLoading && styles.buttonDisabled]} 
                onPress={handleCadastro}
                disabled={isLoading} 
            >
                {isLoading ? (
                    <View style={styles.buttonContent}>
                        <ActivityIndicator color="#FFF" style={{ marginRight: 8 }} />
                        <Text style={styles.buttonText}>Cadastrando...</Text>
                    </View>
                ) : (
                    <Text style={styles.buttonText}>Criar Conta</Text>
                )}
            </TouchableOpacity>

            <Text style={styles.termos}>
                Ao clicar em continuar, você concorda com os nossos{" "}
                <Text style={styles.link}>Termos de serviço</Text> e{" "}
                <Text style={styles.link}>Política de privacidade</Text>.
            </Text>

        </View>
    )
}  