import { ScrollView, View, Text, TextInput } from "react-native";
import { styles } from "./style"
import { GoogleButton } from "../../Components/GoogleButton";
import { AppleButton } from "../../Components/AppleButton";

export function Login() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View>
        <View>
          <Text>Energy Eletric</Text>
        </View>
       
        <Text>Login</Text>
        
        <TextInput placeholder="email@dominio.com" />

        <View>
          <Text>Continuar</Text>
        </View>

            <View style={styles.OuContainer}>
                <View style={styles.line} />
                    <Text style={styles.OuText}>OU</Text>
                <View style={styles.line} />
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
                icon={require("../../../assets/icone-apple-symbole-logo-noir-removebg-preview.png")}
                onPress={() => console.log("Entrar com Apple")}
            />
       
        <Text>Não tem conta? Clique aqui</Text>

      </View>
    </ScrollView>
  );
}
