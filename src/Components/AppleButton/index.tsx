import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./style";
import { ButtonAppleProps } from "./type";

export function AppleButton({ title, icon, onPress }: ButtonAppleProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.iconApple}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}