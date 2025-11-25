import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

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

  function calcular() {
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

    const novaLista = [...lista, novoItem].sort(
      (a, b) => b.consumoMensal - a.consumoMensal
    );

    setLista(novaLista);

    setNome("");
    setPotencia("");
    setHoras("");
    setTarifa("");
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
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text>Consumo mensal: {item.consumoMensal.toFixed(2)} kWh</Text>
            <Text>Custo mensal: R$ {item.custo.toFixed(2)}</Text>
          </View>
        )}
      />

    </View>
  );
}
