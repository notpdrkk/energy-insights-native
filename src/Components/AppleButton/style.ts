import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    justifyContent: "center",
  },

  iconApple: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  icon: {
    width: 24,
    height: 24,
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
    textAlign: "left",
  },
});
