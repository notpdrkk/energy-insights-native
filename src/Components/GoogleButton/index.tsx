import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./style";
import { ButtonGoogleProps } from "./type";

export function GoogleButton({ title, icon, onPress }: ButtonGoogleProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.iconGoogle}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
