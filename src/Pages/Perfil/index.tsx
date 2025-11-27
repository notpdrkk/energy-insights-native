import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./style";
import { CardProfile } from "../../Components/CardProfile";
import { Button } from "../../Components/ButtonComponent";

export const Perfil = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [name] = useState("Usuario exemplo");

  const abrirGaleria = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permissão necessária");
        return;
      }

      const mediaTypesOption =
        (ImagePicker as any).MediaType?.Images ?? undefined;

      const pickerArgs: any = {
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      };

      if (mediaTypesOption !== undefined) {
        pickerArgs.mediaTypes = mediaTypesOption;
      }

      const result = await ImagePicker.launchImageLibraryAsync(pickerArgs);

      const canceled = (result as any)?.canceled ?? (result as any)?.cancelled;
      const uri = (result as any)?.assets?.[0]?.uri || (result as any)?.uri;

      if (!canceled && uri) {
        setPhotoUri(uri);
        console.log("Imagem selecionada:", uri);
      }
    } catch (err) {
      console.log("Erro ao abrir a galeria:", err);
    }
  };

  return (
    <View style={styles.container}>
      <CardProfile name={name} image={photoUri} />
      <Button onPress={abrirGaleria} title="Editar Foto" />

      <View
        style={{
          backgroundColor: "gray",
          padding: 10,
          borderRadius: 8,
          marginTop: 20,
          paddingBottom: "100%",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Caixa para mostrar os eletrodomésticos do usuário
        </Text>
      </View>
    </View>
  );
};
