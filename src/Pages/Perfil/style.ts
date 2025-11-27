import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  eletroBox: {
    marginTop: 20,
    paddingVertical: 10,
  },

  eletroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#222",
  },

  cardContainer: {
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    padding: 10,
  },

  cardItem: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },

  itemActions: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "flex-end",
    gap: 18,
  },

  edit: {
    color: "#007BFF",
    fontSize: 15,
    fontWeight: "600",
  },

  delete: {
    color: "#D11A2A",
    fontSize: 15,
    fontWeight: "600",
  },

  emptyText: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 16,
    color: "#777",
  },

  totalText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#000",
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  modalInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  cancelButton: {
    fontSize: 18,
    color: "#444",
    fontWeight: "600",
  },

  saveButton: {
    fontSize: 18,
    color: "#007BFF",
    fontWeight: "700",
  },
});