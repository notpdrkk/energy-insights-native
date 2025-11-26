import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ModalEletro from "../../Components/ModalEletro";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [modalEletro, setModalEletro] = useState(false);
  const [modalTodos, setModalTodos] = useState(false);

  const { listaSelecionados } = useAppliances();

  const top3 = [...listaSelecionados]
    .sort((a, b) => b.consumoMensal - a.consumoMensal)
    .slice(0, 3);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <AntDesign name="menu-fold" size={28} color="#000" />
        </TouchableOpacity>

        <Text style={styles.logo}>Energy Electric</Text>

        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalEletro(true)}
        >
          <Text style={styles.addButtonText}>Adicionar Produto</Text>
        </TouchableOpacity>

        <View style={styles.dashboardBox}>
          <Text style={styles.dashboardTitle}>Dashboard de Consumo</Text>

          <Text style={{ textAlign: "center", color: "#888", marginTop: 10 }}>
            (gráfico virá aqui)
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Top 3 Consumo</Text>

        {top3.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>
              {index + 1}° • {item.nome}
            </Text>
            <Text style={styles.cardSubtitle}>
              {item.consumoMensal} kWh/mês
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.verTodosButton}
          onPress={() => setModalTodos(true)}
        >
          <Text style={styles.verTodosText}>Ver todos os produtos</Text>
        </TouchableOpacity>
      </ScrollView>

      <ModalEletro
        visible={modalEletro}
        onClose={() => setModalEletro(false)}
      />
    </View>
  );
}
