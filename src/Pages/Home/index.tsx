import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ModalEletro from "../../Components/ModalEletro";
import ModalProdutos from "../../Components/Modalprodutos";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./styles";

export default function Home() {
  const { appliances } = useAppliances();
  const [modalEletro, setModalEletro] = useState(false);
  const [modalProdutos, setModalProdutos] = useState(false);

  const top3 = [...appliances]
    .sort((a, b) => b.consumoMensal - a.consumoMensal)
    .slice(0, 3);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={{ color: "#0A84FF", fontSize: 16 }}>⚡</Text>
          </View>
          <Text style={styles.logoText}>Energy Electric</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Consumo Total</Text>
          <Text style={styles.dashboardSubtitle}>
            Visualize o consumo total dos seus aparelhos.
          </Text>
          <View style={styles.dashboardGraph}>
            <Text style={{ color: "#0A84FF" }}>Gráfico aqui</Text>
          </View>
        </View>


        <Text style={styles.sectionTitle}>Top 3 Consumo</Text>
        {top3.map((item, i) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>
              {i + 1}° • {item.nome}
            </Text>
            <Text style={styles.cardSubtitle}>
              {item.consumoMensal} kWh/mês • {item.potencia} W
            </Text>
          </View>
        ))}


        <TouchableOpacity
          style={styles.addButtonBottom}
          onPress={() => setModalEletro(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Adicionar Produto</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.verTodosButton}
          onPress={() => setModalProdutos(true)}
        >
          <Text style={styles.verTodosText}>Ver todos os produtos</Text>
        </TouchableOpacity>
      </ScrollView>


      <ModalEletro visible={modalEletro} onClose={() => setModalEletro(false)} />
      <ModalProdutos
        visible={modalProdutos}
        onClose={() => setModalProdutos(false)}
      />
    </View>
  );
}
