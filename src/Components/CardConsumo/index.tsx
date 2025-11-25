import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Props {
  id: string;
  potencia: number;
  horas: number;
  consumoMensal: number;
  custoMensal: number;
  onDelete?: (id: string) => void;
  onEdit?: () => void;
}

function CardConsumo({
  id,
  potencia,
  horas,
  consumoMensal,
  custoMensal,
  onDelete,
  onEdit,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>ID: {id}</Text>

      <View style={styles.linha}>
        <Text style={styles.label}>Potência:</Text>
        <Text style={styles.valor}>{potencia} W</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Uso diário:</Text>
        <Text style={styles.valor}>{horas} h/dia</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Consumo mensal:</Text>
        <Text style={styles.valor}>{consumoMensal.toFixed(2)} kWh</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Custo mensal:</Text>
        <Text style={styles.custo}>R$ {custoMensal.toFixed(2)}</Text>
      </View>

      {onEdit && onDelete && (
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.editButton} onPress={onEdit}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(id)}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default CardConsumo;
