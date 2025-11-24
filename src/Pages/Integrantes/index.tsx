import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";

const { width } = Dimensions.get("window");

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
        <View style={styles.container}>
            <Text>Eletro Integrantes</Text>
                <FlatList
                data={integrantes}
                keyExtractor={(item) => item.id }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator= {false}
                renderItem={({ item })=>(
                    <View style={{ width, alignItems: "center" }}>
                        <Image source={item.foto} />

                        <View >
                            <Text >{item.nome}</Text>
                            <Text >{item.funcao}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}