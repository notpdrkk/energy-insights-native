import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 40,
        alignItems: "center",
  },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
  },
    foto: {
        width: width * 0.75,      
        height: width * 0.75,      
        borderRadius: 20,          
        resizeMode: "cover",
        marginTop: 40,
  },
    cardInfo: {
        width: width * 0.85,
        backgroundColor: "#F0F0F0",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 16,
        marginTop: 30,
        alignItems: "center",
  },
})