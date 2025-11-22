import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 25,
        paddingTop: 80,
    },
    header: {
        alignItems: "center",
        marginBottom: 40,
    },
    logo: {
        fontSize: 30,
        fontWeight: "700",
        color: "#000000ff",
        marginBottom: 12,
    },
    
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1EB980",
    },
    subtitle: {
        marginTop: 5,
        fontSize: 14,
        color: "#777",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    half: {
        width: "48%",
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
    },
    button: {
        backgroundColor: "#1EB980",
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    buttonText:{
        color: "#FFF",
        fontSize: 15,
        fontWeight: "600",
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
    },

})