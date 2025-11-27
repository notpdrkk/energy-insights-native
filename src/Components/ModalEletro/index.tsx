import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { styles } from "./style";
import { useAppliances } from "../../Context/EnergyContext";
import { Appliance } from "../../types/appliance";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalProdutos({ visible, onClose }: Props) {
  const { appliances, adicionar } = useAppliances();
  const [loading, setLoading] = useState(false);

  const handleAdd = (item: Appliance) => {
    adicionar(item);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>Todos os Produtos</Text>

          {loading ? (
            <ActivityIndicator size="large" color="#0A84FF" style={{ marginTop: 20 }} />
          ) : (
            <FlatList
              data={appliances}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => (
                <View style={styles.productCard}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.productName}>{item.nome}</Text>
                    <Text style={styles.productInfo}>
                      Potência: {item.potencia} W
                    </Text>
                    <Text style={styles.productInfo}>
                      Consumo: {item.consumoMensal} kWh/mês
                    </Text>
                    {item.dicas ? (
                      <Text style={styles.productTips}>💡 {item.dicas}</Text>
                    ) : null}
                  </View>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAdd(item)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
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
