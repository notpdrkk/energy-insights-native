import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style"; 

export interface ApiItem {
  id: string;
  name: string;
  category?: string;
  watts?: number;
  kwh_month?: number;
  icon?: string;
  kwh_daily?: string | number; 
}

export interface LegacyItem {
  id?: string;
  potencia?: number;
  horas?: number;
  consumoMensal?: number;
  custoMensal?: number;
  nome?: string;
}

type Props = {
  item?: ApiItem;

  id?: string;
  potencia?: number;
  horas?: number;
  consumoMensal?: number;
  custoMensal?: number;
  nome?: string;

  onDelete?: (id: string) => void;
  onEdit?: () => void;
};

export default function CardConsumo(props: Props) {
  const { item, id, potencia, consumoMensal, nome, custoMensal, onDelete, onEdit } = props;

  const displayId = item?.id ?? id ?? "0";
  const displayName = item?.name ?? nome ?? "Aparelho";
  const displayWatts = item?.watts ?? potencia ?? 0;
  const displayKwh = (item?.kwh_month ?? consumoMensal ?? 0) as number;

  return (
    <View style={styles.card}>
        
      <Text style={styles.cardTitle}>{displayName}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Potência:</Text>
        <Text style={styles.value}>{displayWatts}W</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Consumo Mensal:</Text>
        <Text style={styles.value}>{displayKwh.toFixed(2)} kWh</Text>
      </View>

      {item?.kwh_daily && (
        <View style={styles.row}>
            <Text style={styles.label}>Consumo diário:</Text>
            <Text style={styles.value}>{item.kwh_daily} kWh/dia</Text>
        </View>
      )}

      {custoMensal !== undefined && (
        <View style={styles.row}>
          <Text style={styles.label}>Custo:</Text>
          <Text style={styles.cost}>R$ {custoMensal.toFixed(2)}</Text>
        </View>
      )}

      {onEdit || onDelete ? (
        <View style={styles.buttons}>
          {onEdit && <Text style={styles.btnEdit} onPress={onEdit}>Editar</Text>}
          {onDelete && <Text style={styles.btnDelete} onPress={() => onDelete(displayId)}>Excluir</Text>}
        </View>
      ) : null}

    </View>
  );
}
