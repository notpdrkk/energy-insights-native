import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: width * 0.05,
    paddingTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0A84FF",
    textAlign: "center",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#111",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  label: {
    fontWeight: "600",
    color: "#555",
  },

  value: {
    color: "#333",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },

  btnEdit: {
    color: "#1EB980",
    fontWeight: "bold",
    marginRight: 15,
  },

  btnDelete: {
    color: "#FF3B30",
    fontWeight: "bold",
  },
});
