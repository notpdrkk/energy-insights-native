import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },

  header: {
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: "#0A84FF",
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  scrollContent: {
    paddingBottom: 40,
  },

  dashboardBox: {
    backgroundColor: "#F4FDF8",
    marginHorizontal: width * 0.05,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    marginTop: 20,
  },

  dashboardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A84FF",
  },

  dashboardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },

  dashboardGraph: {
    height: 100,
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: width * 0.05,
    marginTop: 25,
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.05,
    marginTop: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111",
  },

  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#777",
  },

  addButtonBottom: {
    backgroundColor: "#1EB980",
    marginHorizontal: width * 0.05,
    marginTop: 25,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  verTodosButton: {
    marginTop: 15,
    alignSelf: "center",
  },

  verTodosText: {
    color: "#0A84FF",
    fontWeight: "700",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
