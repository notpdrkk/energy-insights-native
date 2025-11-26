import React, { useState, useContext } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export const Cadastro: React.FC = () => {
    const { cadastrarUser } = useContext(AuthContext);
    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCadastro = async () => {
        if (!nome || !sobrenome || !email || !senha || !confirmar)
            return Alert.alert("Atenção", "Preencha todos os campos!");

        if (senha !== confirmar)
            return Alert.alert("Erro", "As senhas não coincidem!");

        try {
            setIsLoading(true);

            await cadastrarUser(nome, sobrenome, email, senha);

            setIsLoading(false);

            Alert.alert("Sucesso", "Conta criada com sucesso!");

           
            navigation.navigate("Login");

        } catch (err: any) {
            setIsLoading(false);

            console.log("ERRO AO CADASTRAR:", err?.response?.data || err);

            Alert.alert(
                "Erro no cadastro",
                JSON.stringify(err?.response?.data || err.message)
            );
        }
    };


    return (
        <View style={styles.container}>

            
            <View style={styles.header}>
                <Text style={styles.logo}>Energy Electric</Text>
                <Text style={styles.title}>Criar uma conta</Text>
                <Text style={styles.subtitle}>
                    Insira seu email para se cadastrar
                </Text>
            </View>

            
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.half]}
                    placeholder="Nome"
                    placeholderTextColor="#A3A3A3"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={[styles.input, styles.half]}
                    placeholder="Sobrenome"
                    placeholderTextColor="#A3A3A3"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                />
            </View>

            
            <TextInput
                style={styles.input}
                placeholder="email@dominio.com"
                placeholderTextColor="#A3A3A3"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

           
            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry
                value={confirmar}
                onChangeText={setConfirmar}
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
    );
};
