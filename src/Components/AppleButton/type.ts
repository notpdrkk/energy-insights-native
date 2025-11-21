import { ImageSourcePropType } from "react-native";

export interface ButtonAppleProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}