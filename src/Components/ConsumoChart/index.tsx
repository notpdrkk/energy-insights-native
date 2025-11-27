import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles, chartConfig } from "./style";  

export function ConsumoChart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumo de Energia</Text>

      <LineChart
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
        }}
        width={350}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
    </View>
  );
}
