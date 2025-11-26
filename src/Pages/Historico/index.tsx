import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import CardConsumo from "../../Components/CardConsumo";
import { api } from "../../Apis/mockApi";

interface Item {
  id: string;
  potencia: number;
  horas: number;
  tarifa: number;
  consumoMensal: number;
  custoMensal: number;
}

export default function HistoricoScreen() {
  const [lista, setLista] = useState<Item[]>([]);
  const [editing, setEditing] = useState<Item | null>(null);
  const [pot, setPot] = useState("");
  const [hrs, setHrs] = useState("");
  const [tar, setTar] = useState("");

  useEffect(() => {
    fetchHistorico();
  }, []);

  async function fetchHistorico() {
    try {
      const res = await api.get("/consumos");
      setLista(res.data.sort((a: Item, b: Item) => b.consumoMensal - a.consumoMensal));
    } catch (err) {
      console.log(err);
    }
  }

  function startEdit(item: Item) {
    setEditing(item);
    setPot(String(item.potencia));
    setHrs(String(item.horas));
    setTar(String(item.tarifa));
  }

  async function saveEdit() {
    if (!editing) return;

    const potencia = Number(pot);
    const horas = Number(hrs);
    const tarifa = Number(tar);

    const consumoMensal = (potencia / 1000) * horas * 30;
    const custoMensal = consumoMensal * tarifa;

    const updatedItem = { ...editing, potencia, horas, tarifa, consumoMensal, custoMensal };

    try {
      await api.put(`/consumos/${editing.id}`, updatedItem);
      setLista((prev) =>
        prev
          .map((i) => (i.id === editing.id ? updatedItem : i))
          .sort((a, b) => b.consumoMensal - a.consumoMensal)
      );
      setEditing(null);
      setPot("");
      setHrs("");
      setTar("");
      Alert.alert("Sucesso", "Item atualizado!");
    } catch {
      Alert.alert("Erro", "Não foi possível atualizar");
    }
  }

  async function handleDelete(id: string) {
    try {
      await api.delete(`/consumos/${id}`);
      setLista((prev) => prev.filter((i) => i.id !== id));
    } catch {
      Alert.alert("Erro", "Não foi possível excluir");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>

      {editing && (
        <>
          <TextInput
            style={styles.input}
            value={pot}
            onChangeText={setPot}
            placeholder="Potência (W)"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={hrs}
            onChangeText={setHrs}
            placeholder="Horas/dia"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={tar}
            onChangeText={setTar}
            placeholder="Tarifa R$/kWh"
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={saveEdit}>
            <Text style={styles.buttonText}>Salvar edição</Text>
          </TouchableOpacity>
        </>
      )}

      <FlatList
        data={lista}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <CardConsumo
            id={item.id}
            potencia={item.potencia}
            horas={item.horas}
            consumoMensal={item.consumoMensal}
            custoMensal={item.custoMensal}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => startEdit(item)}
          />
        )}
        style={{ width: "100%", marginTop: 12 }}
      />
    </View>
  );
}
