import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";


export function Menu(){ 

    const [menuOpen, setMenuOpen] = useState(false);
    

    return(
        <View>
             <TouchableOpacity onPress={() => setMenuOpen(true)}>
                <AntDesign name="menu" size={24} color="black" />
             </TouchableOpacity>
            
            <View>
                <Text>Menu</Text>
                
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Sair</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}