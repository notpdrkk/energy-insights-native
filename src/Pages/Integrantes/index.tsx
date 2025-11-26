import { Dimensions, FlatList, Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./style";

const { width } = Dimensions.get("window");

export function Integrantes() {
    const integrantes = [
        {
            id: "1",
            nome: "Nathan",
            funcao: "Eletro Telas",
            foto: require("../../../assets/Nathan.png"),
        },
        {
            id: "2",
            nome: "Pedro",
            funcao: "Eletro Gráfico",
            foto: require("../../../assets/PedroRS.png"),
        },
        {
            id: "3",
            nome: "Arthur",
            funcao: "Eletro APIs",
            foto: require("../../../assets/Arthurs.png"),
        },
        {
            id: "4",
            nome: "Samuel",
            funcao: "Eletro Cálculos",
            foto: require("../../../assets/Samuel.png"),
        },
        {
            id: "5",
            nome: "João",
            funcao: "Eletro CRUD",
            foto: require("../../../assets/Joao.png"),
        },
    ];
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Eletro Integrantes</Text>
                <FlatList
                data={integrantes}
                keyExtractor={(item) => item.id }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator= {false}
                renderItem={({ item })=>(
                    <View style={{ width, alignItems: "center" }}>
                        <Image source={item.foto} style={styles.foto} />

                        <View style={styles.cardInfo}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.funcao}>{item.funcao}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}