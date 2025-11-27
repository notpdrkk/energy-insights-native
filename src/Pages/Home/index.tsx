import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ModalProdutos from "../../Components/Modalprodutos";
import ModalVerProdutos from "../../Components/ModalVerProdutos";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./styles";

export default function Home() {
  const { appliances } = useAppliances();
  const [modalEletro, setModalEletro] = useState(false);
  const [modalProdutos, setModalProdutos] = useState(false);

  const consumoTotal = appliances.reduce((t, item) => t + item.consumoMensal, 0);
  const metaMensal = 500; 
  const progresso = Math.min((consumoTotal / metaMensal) * 100, 100);

  const top3 = [...appliances]
    .sort((a, b) => b.consumoMensal - a.consumoMensal)
    .slice(0, 3);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.iconEmoji}>⚡</Text>
          </View>
          <Text style={styles.logoText}>Energy Electric</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.dashboard}>
          <Text style={styles.dashboardTitle}>Resumo Mensal</Text>
          <Text style={styles.dashboardInfo}>{consumoTotal.toFixed(1)} kWh usados</Text>
          <Text style={styles.dashboardMeta}>Meta: {metaMensal} kWh</Text>

          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progresso}%` }]} />
          </View>

          <Text style={styles.percentText}>
            {progresso.toFixed(0)}% da meta atingida
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Top 3 consumidores</Text>
        
        {top3.length === 0 && (
          <Text style={{ color:"#666", marginBottom:15 }}>Nenhum produto cadastrado.</Text>
        )}

        {top3.map((item, i) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{i+1}° • {item.nome}</Text>
            <Text style={styles.cardSubtitle}>
              {item.consumoMensal} kWh/mês • {item.potencia} W
            </Text>
          </View>
        ))}

        <TouchableOpacity style={styles.addButtonBottom} onPress={() => setModalEletro(true)}>
          <Text style={styles.addButtonText}>Adicionar Produto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verTodosButton} onPress={() => setModalProdutos(true)}>
          <Text style={styles.verTodosText}>Ver todos os produtos</Text>
        </TouchableOpacity>

      </ScrollView>

      <ModalProdutos visible={modalEletro} onClose={() => setModalEletro(false)} />
      <ModalVerProdutos visible={modalProdutos} onClose={() => setModalProdutos(false)} />
    </View>
  );
}
