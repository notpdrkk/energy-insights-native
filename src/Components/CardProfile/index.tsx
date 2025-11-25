import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CardProfileProps } from "./type";
import { styles } from "./style";

export const CardProfile = ({ name, image }: CardProfileProps) => {
  const defaultImage = "/assets/profile-default.png";

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image || defaultImage}}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
