import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import CardConsumo from "../../Components/CardConsumo";


type Item = {
  id: string;
  potencia: number;
  horas: number;
  tarifa: number;
  consumoMensal: number;
  custoMensal: number;
};

export default function HistoricoScreen({ route }: any) {
  const [lista, setLista] = useState<Item[]>([]);
  const [editing, setEditing] = useState<Item | null>(null);
  const [pot, setPot] = useState("");
  const [hrs, setHrs] = useState("");
  const [tar, setTar] = useState("");

  useEffect(() => {
    loadMock();
  }, []);

  function loadMock() {
    const mock: Item[] = [
      {
        id: "1",
        potencia: 1500,
        horas: 2,
        tarifa: 0.85,
        consumoMensal: (1500 / 1000) * 2 * 30,
        custoMensal: ((1500 / 1000) * 2 * 30) * 0.85,
      },
      {
        id: "2",
        potencia: 100,
        horas: 10,
        tarifa: 0.85,
        consumoMensal: (100 / 1000) * 10 * 30,
        custoMensal: ((100 / 1000) * 10 * 30) * 0.85,
      },
    ];

    setLista(mock.sort((a, b) => b.consumoMensal - a.consumoMensal));
  }

  function startEdit(item: Item) {
    setEditing(item);
    setPot(String(item.potencia));
    setHrs(String(item.horas));
    setTar(String(item.tarifa));
  }

  function saveEdit() {
    if (!editing) return;

    const potencia = Number(pot);
    const horas = Number(hrs);
    const tarifa = Number(tar);

    const consumoMensal = (potencia / 1000) * horas * 30;
    const custoMensal = consumoMensal * tarifa;

    const updated = lista.map((i) =>
      i.id === editing.id
        ? {
            ...i,
            potencia,
            horas,
            tarifa,
            consumoMensal,
            custoMensal,
          }
        : i
    );

    setLista(updated.sort((a, b) => b.consumoMensal - a.consumoMensal));
    setEditing(null);
    setPot("");
    setHrs("");
    setTar("");

    Alert.alert("Sucesso", "Item atualizado!");
  }

  function handleDelete(id: string) {
    setLista((prev) => prev.filter((i) => i.id !== id));
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
