import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },

  input: {
    width: "100%",
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#333",
  },

  button: {
    backgroundColor: "#4F46E5",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
