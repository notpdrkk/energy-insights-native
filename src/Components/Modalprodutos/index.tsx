import React from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
import { useAppliances } from "../../Context/EnergyContext";
import { styles } from "./style";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalProdutos({ visible, onClose }: Props) {
  const { appliances } = useAppliances();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Todos os Produtos</Text>

          <FlatList
            data={appliances}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View>
                  <Text style={styles.cardTitle}>{item.nome}</Text>
                  <Text style={styles.cardSubtitle}>{item.consumoMensal} kWh/mês</Text>
                </View>
              </View>
            )}
          />

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
