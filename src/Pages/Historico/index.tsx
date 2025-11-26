// src/Pages/Historico/index.tsx
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

export default function HistoricoScreen() {
  const [historico, setHistorico] = useState<ConsumoProps[]>([]);

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    const { data } = await api.get("/consumos");

    const items = data.map((i: any, index: number) => ({
      id: String(index + 1),
      ...i
    }));

    setHistorico(items);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Consumo</Text>

      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardConsumo
            item={{
              ...item,
              kwh_daily: (item.kwh_month / 30).toFixed(2)
            }}
          />
        )}
      />
    </View>
  );
}
