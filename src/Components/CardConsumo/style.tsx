import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0f1724", 
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  cardTitle: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "700",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: "#cbd5e1", 
  },
  value: {
    fontSize: 13,
    color: "#e6eef8",
    fontWeight: "600",
  },
  cost: {
    fontSize: 13,
    color: "#f59e0b", 
    fontWeight: "700",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12, 
    marginTop: 10,
  },
  btnEdit: {
    fontSize: 13,
    color: "#60a5fa", 
    fontWeight: "700",
    marginRight: 12,
  },
  btnDelete: {
    fontSize: 13,
    color: "#fb7185", 
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#071025",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 12,
  },


  input: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#0b1220",
    color: "#fff",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#06b6d4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#002026",
    fontWeight: "700",
  },
});
