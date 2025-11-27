import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
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

export default function ConsumoScreen() {
  const [lista, setLista] = useState<ConsumoProps[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const { data } = await api.get("/consumos");
      const addId = data.map((i: any, index: number) => ({
        ...i,
        id: String(index + 1),
      }));
      setLista(addId);
    } catch (err) {
      console.warn("Erro ao carregar consumos:", err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo dos Equipamentos</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar aparelho..."
        placeholderTextColor="#999"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={lista.filter(item =>
          item.name.toLowerCase().includes(busca.toLowerCase())
        )}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardConsumo {...item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
