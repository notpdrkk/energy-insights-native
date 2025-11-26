import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },

  modalBox: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    maxHeight: "80%",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },

  itemText: {
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
  },

  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  closeButton: {
    marginTop: 25,
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
  },

  closeText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});
