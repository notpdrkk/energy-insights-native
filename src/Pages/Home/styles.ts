import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },

  title: {
    marginTop: 250,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#222",
  },

  
  button: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 10,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#F9F9F9",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  tip: {
    marginTop: 10,
    fontStyle: "italic",
    color: "#555",
  },
});
