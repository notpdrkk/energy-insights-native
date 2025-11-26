import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { api } from "../../Apis/mockApi"; 
import CardConsumo from "../../Components/CardConsumo";

interface ItemConsumo {
  id: string;
  nome: string;
  potencia: number;
  horas: number;
  consumoMensal: number;
  custo: number;
}

export default function ConsumoScreen() {
  const [nome, setNome] = useState("");
  const [potencia, setPotencia] = useState("");
  const [horas, setHoras] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [lista, setLista] = useState<ItemConsumo[]>([]);

  useEffect(() => {
    fetchLista();
  }, []);

  async function fetchLista() {
    try {
      const res = await api.get("/consumos");
      setLista(res.data.sort((a: ItemConsumo, b: ItemConsumo) => b.consumoMensal - a.consumoMensal));
    } catch (err) {
      console.log("Erro ao carregar consumos:", err);
    }
  }

  async function calcular() {
    if (!nome || !potencia || !horas || !tarifa) return;

    const pot = parseFloat(potencia);
    const hrs = parseFloat(horas);
    const trf = parseFloat(tarifa);

    const consumoMensal = (pot / 1000) * hrs * 30;
    const custo = consumoMensal * trf;

    const novoItem: ItemConsumo = {
      id: Math.random().toString(),
      nome,
      potencia: pot,
      horas: hrs,
      consumoMensal,
      custo,
    };

    try {
      await api.post("/consumos", novoItem);
      setLista((prev) => [...prev, novoItem].sort((a, b) => b.consumoMensal - a.consumoMensal));
      setNome("");
      setPotencia("");
      setHoras("");
      setTarifa("");
    } catch (err) {
      Alert.alert("Erro", "Não foi possível salvar o consumo");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular Consumo de Energia</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do aparelho"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Potência (W)"
        keyboardType="numeric"
        value={potencia}
        onChangeText={setPotencia}
      />

      <TextInput
        style={styles.input}
        placeholder="Horas por dia"
        keyboardType="numeric"
        value={horas}
        onChangeText={setHoras}
      />

      <TextInput
        style={styles.input}
        placeholder="Tarifa (R$/kWh)"
        keyboardType="numeric"
        value={tarifa}
        onChangeText={setTarifa}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Adicionar e Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Lista (ordenada por maior consumo)</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardConsumo
            id={item.id}
            potencia={item.potencia}
            horas={item.horas}
            consumoMensal={item.consumoMensal}
            custoMensal={item.custo}
          />
        )}
      />
    </View>
  );
}
