import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Cadastro () {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>⚡Energy Eletric</Text>
                <Text style={styles.title}>Cadastro</Text>
            </View>

        </View>
    )
}  