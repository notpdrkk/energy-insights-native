import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style"
import { GoogleButton } from "../../Components/GoogleButton";
import { AppleButton } from "../../Components/AppleButton";

export function Login() {
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
          />

          <TouchableOpacity>
           <Text>Continuar</Text>
          </TouchableOpacity>

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
            icon={require("../../../assets/icone-apple-symbole-logo-noir-removebg-preview copy.png")}
            onPress={() => console.log("Entrar com Apple")}
          />
      
          <Text>
            Não tem conta? <Text>Clique aqui</Text>
          </Text>
      </View>
    </ScrollView>
  );
}
