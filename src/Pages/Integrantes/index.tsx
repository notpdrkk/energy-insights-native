import { Text, View } from "react-native";



export function Integrantes() {
    const integrantes = [
        {
            id: 1,
            nome: "Nathan",
            funcao: "Eletro Telas",
            foto: require("../../../assets/Nathan.png"),
        },
        {
            id: 2,
            nome: "Pedro",
            funcao: "Eletro Gráfico",
            foto: require("../../../assets/Pedro.png"),
        },
        {
            id: 3,
            nome: "Arthur",
            funcao: "Eletro APIs",
            foto: require("../../../assets/Arthur.png"),
        },
        {
            id: 4,
            nome: "Samuel",
            funcao: "Eletro Cálculos",
            foto: require("../../../assets/Samuel.png"),
        },
        {
            id: 5,
            nome: "João",
            funcao: "Eletro CRUD",
            foto: require("../../../assets/Joao.png"),
        },
    ];
    return(
        <View>
            <Text>Eletro Integrantes</Text>


            <Text>Carrossel</Text>
        </View>
    )
}