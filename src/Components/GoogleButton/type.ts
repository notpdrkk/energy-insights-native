

import { ImageSourcePropType } from "react-native";

export interface ButtonGoogleProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}