import { View, Text, FlatList } from "react-native";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./style"; 

export default function Historico() {
  const { appliances } = useAppliances();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>

      <FlatList
        data={appliances}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text>Potência: {item.potencia} W</Text>
            <Text>Consumo: {item.consumoMensal} kWh/mês</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
