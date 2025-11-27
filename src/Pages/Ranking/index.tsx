import { View, Text, FlatList } from "react-native";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./style"; 

export default function Ranking() {
  const { appliances } = useAppliances();
  const sorted = [...appliances].sort((a, b) => b.consumoMensal - a.consumoMensal);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de Consumo</Text>

      <FlatList
        data={sorted}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              {index + 1}° • {item.nome}
            </Text>
            <Text>Potência: {item.potencia} W</Text>
            <Text>Consumo: {item.consumoMensal} kWh/mês</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
