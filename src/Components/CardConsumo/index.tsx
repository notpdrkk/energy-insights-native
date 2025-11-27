import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style"; 

export interface CardProps {
  id: string;
  name: string;
  watts?: number;
  kwh_month?: number;
  kwh_daily?: string | number;
  onDelete?: (id: string) => void;
  onEdit?: () => void;
}

export default function CardConsumo({
  id,
  name,
  watts,
  kwh_month,
  kwh_daily,
  onDelete,
  onEdit
}: CardProps) {

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>

      {watts !== undefined && (
        <View style={styles.row}>
          <Text style={styles.label}>Potência:</Text>
          <Text style={styles.value}>{watts} W</Text>
        </View>
      )}

      {kwh_month !== undefined && (
        <View style={styles.row}>
          <Text style={styles.label}>Consumo mensal:</Text>
          <Text style={styles.value}>{kwh_month.toFixed(2)} kWh</Text>
        </View>
      )}

      {kwh_daily && (
        <View style={styles.row}>
          <Text style={styles.label}>Consumo diário:</Text>
          <Text style={styles.value}>{kwh_daily} kWh/dia</Text>
        </View>
      )}

      {(onEdit || onDelete) && (
        <View style={styles.buttons}>
          {onEdit && <TouchableOpacity onPress={onEdit}><Text style={styles.btnEdit}>Editar</Text></TouchableOpacity>}
          {onDelete && <TouchableOpacity onPress={() => onDelete(id)}><Text style={styles.btnDelete}>Excluir</Text></TouchableOpacity>}
        </View>
      )}
    </View>
  );
}
