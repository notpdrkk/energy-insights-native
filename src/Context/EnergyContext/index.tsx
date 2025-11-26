import { createContext, useContext, useState, ReactNode } from "react";
import { Appliance } from "../../types/appliance";

interface ApplianceContextProps {
  listaSelecionados: Appliance[];
  adicionar: (item: Appliance) => void;
}

const ApplianceContext = createContext<ApplianceContextProps>(
  {} as ApplianceContextProps
);

export function ApplianceProvider({ children }: { children: ReactNode }) {
  const [listaSelecionados, setListaSelecionados] = useState<Appliance[]>([]);

  function adicionar(item: Appliance) {
    setListaSelecionados((prev) => [...prev, item]);
  }

  return (
    <ApplianceContext.Provider value={{ listaSelecionados, adicionar }}>
      {children}
    </ApplianceContext.Provider>
  );
}

export const useAppliances = () => useContext(ApplianceContext);
