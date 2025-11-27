import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoIcon: {
    backgroundColor: "#E8F1FF",
    padding: 10,
    borderRadius: 12,
  },

  iconEmoji: {
    fontSize: 18,
  },

  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0A84FF",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },

  dashboard: {
    backgroundColor: "#F1F7FF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 25,
    elevation: 3,
  },

  dashboardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  dashboardInfo: {
    fontSize: 16,
    color: "#1E1E1E",
    marginTop: 6,
  },

  dashboardMeta: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  progressBarBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#DCE9FF",
    borderRadius: 50,
    marginTop: 14,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#0A84FF",
    borderRadius: 50,
  },

  percentText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: "600",
    color: "#0A84FF",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#0A0A0A",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  cardSubtitle: {
    color: "#6A6A6A",
    marginTop: 4,
  },

  addButtonBottom: {
    backgroundColor: "#0A84FF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },

  verTodosButton: {
    backgroundColor: "#E8F2FF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  verTodosText: {
    color: "#0A84FF",
    fontWeight: "700",
  },
});
