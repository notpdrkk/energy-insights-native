import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import CardConsumo from "../../Components/CardConsumo";

export default function RankingScreen() {
  const [lista, setLista] = useState<any[]>([]);
  const resource = "consumos";

  useEffect(() => {
    fetchListaMock();
  }, []);

  async function fetchListaMock() {
    const mock = [
      {
        id: "1",
        potencia: 900,
        horas: 5,
        consumoMensal: (900 / 1000) * 5 * 30,
        custoMensal: ((900 / 1000) * 5 * 30) * 0.85,
      },
      {
        id: "2",
        potencia: 60,
        horas: 12,
        consumoMensal: (60 / 1000) * 12 * 30,
        custoMensal: ((60 / 1000) * 12 * 30) * 0.85,
      },
    ];

    setLista(mock.sort((a, b) => b.consumoMensal - a.consumoMensal));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking - Maior Consumo</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardConsumo
            id={item.id}
            potencia={item.potencia}
            horas={item.horas}
            consumoMensal={item.consumoMensal}
            custoMensal={item.custoMensal}
          />
        )}
        style={{ width: "100%", marginTop: 12 }}
      />
    </View>
  );
}
