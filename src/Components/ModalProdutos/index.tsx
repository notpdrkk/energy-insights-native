import React from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { useAppliances } from "../../Context/EnergyContext";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalProdutos({ visible, onClose }: Props) {
  const { listaSelecionados } = useAppliances();

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Todos os Produtos</Text>

          {listaSelecionados.length === 0 ? (
            <Text style={styles.emptyText}>Nenhum produto adicionado.</Text>
          ) : (
            <FlatList
              data={listaSelecionados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemName}>{item.nome}</Text>
                  <Text style={styles.itemConsumo}>
                    {item.consumoMensal} kWh/mês
                  </Text>
                </View>
              )}
            />
          )}

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
