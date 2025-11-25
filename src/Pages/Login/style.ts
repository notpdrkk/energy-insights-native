import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F7FDF9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    header: {
        alignItems: "center",
        marginBottom: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        color: "#1EB980",
    },

    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 20,
    },
    button: {
        width: "100%",
        height: 48,
        backgroundColor: "#38C695",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
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
    buttonDisabled: {
        backgroundColor: "#A3A3A3", 
    },
    OuContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },

    line: {
        width: 80,
        height: 1,
        backgroundColor: "#525151ff",
    },

    OuText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: "#1f1f1fff",
        fontWeight: "500",
    },
    footerText: {
        marginTop: 20,
        color: "#777",
    },
    link: {
        color: "#2DAB87",
        textDecorationLine: "underline",
    },
    ContainerBotao:{
        margin:0,
        padding:0,
        transform: [{ translateY: 4 }],
    }
})