import { TouchableOpacity, View, Text, ButtonProps } from "react-native";
import { styles } from "./style";
import { IButtonProps } from "./type";

export const Button = ({title, onPress}: IButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style= {styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
