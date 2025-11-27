import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "92%",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
  },

  rank: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C47FF",   // cor destaque
    marginRight: 15,
    width: 35,
    textAlign: "center",
  },

  infoBox: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },

  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },

  details: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },

  emoji: {
    fontSize: 28,
    marginLeft: 10,
  }
});
