import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Cadastro () {
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
                placeholder="email@dominio.com"
                placeholderTextColor="#A3A3A3"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry
            />

            <TextInput
                placeholder="Confirmar senha"
                placeholderTextColor="#A3A3A3"
                secureTextEntry
            />

            <TouchableOpacity>
                 <Text>Criar Conta</Text>
            </TouchableOpacity>

            <Text >
                Já tem conta?
                <Text 
                    
                >
                    Clique aqui
                </Text>
            </Text>

        </View>
    )
}  