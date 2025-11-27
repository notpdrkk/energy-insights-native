import React, { useState, useContext } from "react"; 
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { AuthContext } from "../../Context/AuthContext";

interface Props {
  navigation: any;
}

export const Cadastro: React.FC<Props> = ({ navigation }) => {
    const { cadastrarUser } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCadastro = async () => {
        if (senha !== confirmar) {
            return Alert.alert("Erro", "As senhas não coincidem");
        }

        setIsLoading(true);
        const ok = await cadastrarUser(nome, sobrenome, email, senha);
        setIsLoading(false);

        if (ok) {
            Alert.alert("Sucesso", "Conta criada!");
            navigation.navigate("Login");
        } else {
            Alert.alert("Erro", "Falha ao cadastrar");
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>Energy Electric</Text>
                    <Text style={styles.title}>Criar uma conta</Text>
                    <Text style={styles.subtitle}>Insira seus dados para se cadastrar</Text>
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
        </ScrollView>
    );
};
