import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    justifyContent: "center",
  },

  iconGoogle: {
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    backgroundColor: "transparent",
  },

  icon: {
    width: 24,
    height: 24,
  },

  title: {
    flex: 1,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },
});
