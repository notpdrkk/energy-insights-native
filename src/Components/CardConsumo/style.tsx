import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    marginBottom: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  label: {
    color: "#aaa",
    fontSize: 14,
  },

  value: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  cost: {
    color: "#4CAF50",
    fontSize: 14,
    fontWeight: "700",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    gap: 12,
  },

  btnEdit: {
    color: "#4DA6FF",
    fontSize: 14,
    fontWeight: "600",
  },

  btnDelete: {
    color: "#ff4d4d",
    fontSize: 14,
    fontWeight: "600",
  },
});
