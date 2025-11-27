import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FDF9",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 60,
  },

  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
    marginBottom: 12,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1EB980",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 6,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 12,
    backgroundColor: "#fff",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  half: {
    width: "48%",
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1EB980",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonDisabled: {
    backgroundColor: "#A3A3A3",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  termos: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    lineHeight: 18,
  },

  link: {
    color: "#1EB980",
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  OuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    width: "100%",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },

  OuText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },

  footerText: {
    color: "#555",
    fontSize: 14,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 10,
  },
});
