import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  addButton: {
    backgroundColor: "#1EB980",
    marginTop: 20,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },

  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  dashboardBox: {
    backgroundColor: "#F4FDF8",
    padding: 20,
    marginTop: 25,
    borderRadius: 12,
    marginHorizontal: 20,
  },

  dashboardTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 12,
    elevation: 3,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  cardSubtitle: {
    marginTop: 4,
    color: "#777",
  },

  verTodosButton: {
    marginTop: 25,
    alignSelf: "center",
  },

  verTodosText: {
    color: "#1EB980",
    fontWeight: "700",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  verTodosBtn: {
    width: "100%",
    backgroundColor: "#1EB980",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  verTodosTxt: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
},

});