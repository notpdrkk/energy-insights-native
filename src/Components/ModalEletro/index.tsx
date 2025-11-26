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
import { fetchAppliances } from "../../Apis/ApplianceApi/applianceApi";
import { useAppliances } from "../../Context/EnergyContext";
import { Appliance } from "../../types/appliance";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalEletro({ visible, onClose }: Props) {
  const [lista, setLista] = useState<Appliance[]>([]);
  const [loading, setLoading] = useState(false);

  const { adicionar } = useAppliances();

  useEffect(() => {
    if (visible) load();
  }, [visible]);

  const load = async () => {
    try {
      setLoading(true);
      const data = await fetchAppliances();
      setLista(data);
    } catch (err) {
      console.log("Erro API:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Eletrodomésticos</Text>

          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={lista}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item.nome}</Text>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                      adicionar(item);
                      onClose();
                    }}
                  >
                    <Text style={styles.addButtonText}>Adicionar</Text>
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
