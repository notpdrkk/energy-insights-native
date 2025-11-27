import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    elevation: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#0A84FF",
  },

  card: {
    backgroundColor: "#F4F8FF",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },

  closeButton: {
    marginTop: 12,
    backgroundColor: "#ff3b30",
    padding: 12,
    borderRadius: 10,
  },

  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
