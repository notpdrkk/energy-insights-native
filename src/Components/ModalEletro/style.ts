import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalBox: {
    width: "100%",
    maxHeight: "80%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },

  itemText: {
    fontSize: 16,
    color: "#333",
  },

  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  closeButton: {
    marginTop: 25,
    backgroundColor: "#333",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  closeText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
