import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import CardConsumo from "../../Components/CardConsumo";
import { api } from "../../Apis/UserApi/userApi";


export interface RankingProps {
  id: string;
  name: string;
  category: string;
  watts: number;
  kwh_month: number;
  icon: string;
}


const RankingScreen: React.FC = () => {
  const [lista, setLista] = useState<RankingProps[]>([]);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    try {
      const { data } = await api.get("/consumos");


      const listaComId: RankingProps[] = data.map((item: any, index: number) => ({
        id: String(index + 1),
        name: item.name,
        category: item.category,
        watts: item.watts,
        kwh_month: item.kwh_month,
        icon: item.icon,
      }));


      const ordenado = listaComId.sort(
        (a: RankingProps, b: RankingProps) => b.kwh_month - a.kwh_month
      );

      setLista(ordenado);
    } catch (err) {
      console.warn("Erro ao carregar ranking:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking de Consumo</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <CardConsumo
            name={item.name}
            category={item.category}
            watts={item.watts}
            kwh_month={item.kwh_month}
            icon={item.icon}
            rank={index + 1}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default RankingScreen;
