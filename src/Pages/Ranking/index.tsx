import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import CardConsumo from "../../Components/CardConsumo";
import { api } from "../../Apis/mockApi";

export default function RankingScreen() {
  const [lista, setLista] = useState<any[]>([]);

  useEffect(() => {
    fetchRanking();
  }, []);

  async function fetchRanking() {
    try {
      const res = await api.get("/consumos");
      setLista(res.data.sort((a: any, b: any) => b.consumoMensal - a.consumoMensal));
    } catch (err) {
      console.log(err);
    }
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
