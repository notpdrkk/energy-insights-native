import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 25,
  },

  modalBox: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    maxHeight: "80%",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
    marginVertical: 30,
  },

  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#EAEAEA",
  },

  itemName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },

  itemConsumo: {
    fontSize: 14,
    color: "#666",
  },

  closeButton: {
    marginTop: 25,
    backgroundColor: "#1EB980",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  closeText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
