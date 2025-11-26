import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import ModalEletro from "../../Components/ModalEletro";
import { useAppliances } from "../../Context/EnergyContext";
import { MaterialIcons } from "@expo/vector-icons";

const tips = [
  "desligue da tomada quando não estiver usando.",
  "evite deixar em modo standby.",
  "limpe regularmente para manter eficiência.",
  "use em horários fora do pico, se possível.",
  "evite uso desnecessário para reduzir consumo.",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const { listaSelecionados } = useAppliances();

  
  const gerarDica = (nome: string) => {
    const random = tips[Math.floor(Math.random() * tips.length)];
    return `💡 ${nome}: ${random}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Economia de Energia</Text>

      
      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        <MaterialIcons name="search" size={22} color="#FFF" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Buscar Eletrodomésticos</Text>
      </TouchableOpacity>

      {/* LISTA DE ITENS ADICIONADOS */}
      <FlatList
        data={listaSelecionados}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text>Potência: {item.potencia}W</Text>
            <Text>Consumo: {item.consumoMensal} kWh/mês</Text>

            <Text style={styles.tip}>{gerarDica(item.nome)}</Text>
          </View>
        )}
      />

      {/* MODAL */}
      <ModalEletro visible={open} onClose={() => setOpen(false)} />
    </View>
  );
}
