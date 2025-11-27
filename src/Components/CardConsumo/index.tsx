import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

export interface CardProps {
  name: string;
  category: string;
  watts: number;
  kwh_month: number;
  icon: string;
  rank: number;
}

export default function CardConsumo({ name, category, watts, kwh_month, icon, rank }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.rank}>#{rank}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.details}>{watts}W • {kwh_month} kWh/mês</Text>
      </View>

      <Text style={styles.emoji}>{icon}</Text>
    </View>
  );
}
