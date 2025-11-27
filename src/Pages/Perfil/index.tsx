import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { styles } from "./style";

import { CardProfile } from "../../Components/CardProfile";
import { Button } from "../../Components/ButtonComponent";

import { getUser, updateUser } from "../../Apis/appAPI";

import { AuthContext } from "../../Context/AuthContext";
import { User } from "../../types/appliance";
import { useNavigation } from "@react-navigation/native";

export const Perfil = () => {
  const navigation = useNavigation();

  const { user, logout } = useContext(AuthContext);
  const userId = user?.id;

  const [usuario, setUsuario] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    if (!userId) return;

    try {
      setLoading(true);

      const usuarioData = await getUser(userId);
      setUsuario(usuarioData);

    } catch (err) {
      console.log("Erro ao carregar perfil:", err);
    } finally {
      setLoading(false);
    }
  }

  async function alterarFoto() {
    if (!userId) return;

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const foto = result.assets[0].uri;
      await updateUser(userId, { photo: foto });
      loadData();
    }
  }

  useEffect(() => {
    if (user) loadData();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  return (
    <View style={styles.container}>

      {usuario && (
        <CardProfile
          name={`${usuario.nome} ${usuario.sobrenome}`}
          image={
            usuario.photo ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
        />
      )}

      <Button title="Alterar Foto" onPress={alterarFoto} />
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: "#FF4D4D",
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={async () => {
          await logout();
          navigation.navigate("StackLogin");
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
};
