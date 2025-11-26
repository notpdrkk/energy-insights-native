import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import { api } from "../../Apis/UserApi/userApi";
import CardConsumo from "../../Components/CardConsumo";

interface ConsumoProps {
  id: string;
  name: string;
  category: string;
  watts: number;
  kwh_month: number;
  icon: string;
}

export default function RankingScreen() {
  const [lista, setLista] = useState<ConsumoProps[]>([]);

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    const { data } = await api.get("/consumos");

    const comId: ConsumoProps[] = data.map((i: any, index: number) => ({
      ...i,
      id: String(index+1) 
    }));

    setLista(comId.sort((a, b) => b.kwh_month - a.kwh_month));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de Consumo (kWh/mês)</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardConsumo {...item}/> } 
      />
    </View>
  );
}
