import { StyleSheet } from "react-native";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";

export const chartConfig: ChartConfig = {
  backgroundColor: "#0c162c",
  backgroundGradientFrom: "#0c162c",
  backgroundGradientTo: "#1b2b45",
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  propsForDots: { r: "4" }
};

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#07111f",
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 14,
    textAlign: "center",
  },
  chart: {
    borderRadius: 12,
  },
});
