import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Appliance {
  id: string;
  nome: string;
  potencia: number;
  consumoMensal: number;
  dicas?: string;
  [key: string]: any;
}

interface EnergyContextData {
  appliances: Appliance[];
  listaSelecionados: Appliance[];
  addAppliance: (payload: Partial<Appliance> | Record<string, any>) => Promise<void>;
  removeAppliance: (id: string) => Promise<void>;
  toggleSelect: (id: string) => void;
  clearAll: () => Promise<void>;
  adicionar: (payload: Partial<Appliance> | Record<string, any>) => Promise<void>;
}

const STORAGE_KEY = "@eletro_items_v1";
const SELECTED_KEY = "@eletro_selected_v1";

const EnergyContext = createContext<EnergyContextData>({} as EnergyContextData);

function normalizeIncoming(item: Record<string, any>, idFallback?: string): Appliance {
  const id = (item.id && String(item.id)) || idFallback || (Date.now().toString() + Math.random().toString(16).slice(2));
  const nome = item.nome ?? item.name ?? item.title ?? "Aparelho";
  const potencia = Number(item.potencia ?? item.watts ?? item.power ?? item.pot ?? 0);
  const consumoMensal = Number(item.consumoMensal ?? item.kwh_month ?? item.consumo ?? item.kwh ?? 0);
  const dicas = item.dicas ?? item.tips ?? "";
  const consumoEstimado = consumoMensal || (potencia ? (potencia / 1000) * 24 * 30 : 0);

  return { id, nome, potencia, consumoMensal: Number(consumoEstimado), dicas, ...item };
}

export function EnergyProvider({ children }: { children: React.ReactNode }) {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        const sel = await AsyncStorage.getItem(SELECTED_KEY);
        if (raw) {
          const parsed: any[] = JSON.parse(raw);
          const normalized = parsed.map((p, i) => normalizeIncoming(p, String(i + 1)));
          setAppliances(normalized);
        }
        if (sel) setSelectedIds(new Set(JSON.parse(sel)));
      } catch (e) {
        console.warn("Erro carregando EnergyContext:", e);
      }
    })();
  }, []);

  const persist = async (appls: Appliance[]) => {
    setAppliances(appls);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(appls));
    } catch (e) {
      console.warn("Erro salvando appliances:", e);
    }
  };

  const addAppliance = async (payload: Partial<Appliance> | Record<string, any>) => {
    const novo = normalizeIncoming(payload as any);
    const exists = appliances.find(a => a.id === novo.id);
    if (!exists) {
      const updated = [...appliances, novo];
      await persist(updated);
    }
  };

  const removeAppliance = async (id: string) => {
    const updated = appliances.filter(a => a.id !== id);
    await persist(updated);
    if (selectedIds.has(id)) {
      const next = new Set(selectedIds);
      next.delete(id);
      setSelectedIds(next);
      await AsyncStorage.setItem(SELECTED_KEY, JSON.stringify(Array.from(next)));
    }
  };

  const toggleSelect = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
    AsyncStorage.setItem(SELECTED_KEY, JSON.stringify(Array.from(next))).catch(console.warn);
  };

  const clearAll = async () => {
    setAppliances([]);
    setSelectedIds(new Set());
    await AsyncStorage.removeItem(STORAGE_KEY);
    await AsyncStorage.removeItem(SELECTED_KEY);
  };

  const listaSelecionados = useMemo(
    () => appliances.filter(a => selectedIds.has(a.id)),
    [appliances, selectedIds]
  );

  return (
    <EnergyContext.Provider value={{
      appliances,
      listaSelecionados,
      addAppliance,
      removeAppliance,
      toggleSelect,
      clearAll,
      adicionar: addAppliance
    }}>
      {children}
    </EnergyContext.Provider>
  );
}

export function useAppliances() {
  return useContext(EnergyContext);
}
