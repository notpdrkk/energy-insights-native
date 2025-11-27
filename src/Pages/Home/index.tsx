import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalEletro from "../../Components/ModalEletro";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./styles";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "../../Components/ConsumoChart/style"; 

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const navigation = useNavigation();
  const [modalEletro, setModalEletro] = useState(false);
  const [modalAllVisible, setModalAllVisible] = useState(false);

  const { listaSelecionados } = useAppliances();

  // Dados para o gráfico
  const labels = listaSelecionados.map((item) => item.nome);
  const valores = listaSelecionados.map((item) => item.consumoMensal);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.header}>
        <Text style={styles.title}>Energy Electric</Text>
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

          {listaSelecionados.length === 0 ? (
            <Text style={{ textAlign: "center", color: "#888", marginTop: 10 }}>
              Adicione produtos para ver o gráfico
            </Text>
          ) : (
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    data: valores,
                  },
                ],
              }}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
              style={{ borderRadius: 12, marginTop: 20 }}
              bezier
            />
          )}
        </View>
      

        <Text style={styles.sectionTitle}>Top 3 Consumo</Text>

        {listaSelecionados
          .sort((a, b) => b.consumoMensal - a.consumoMensal)
          .slice(0, 3)
          .map((item, index) => (
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
          style={styles.verTodosBtn}
          onPress={() => setModalAllVisible(true)}
        >
          <Text style={styles.verTodosTxt}>Ver todos os produtos</Text>
        </TouchableOpacity>
      </ScrollView>

      <ModalEletro
        visible={modalEletro}
        onClose={() => setModalEletro(false)}
      />
    </View>
  );
}
