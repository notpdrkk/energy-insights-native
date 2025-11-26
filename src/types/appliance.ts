export interface Appliance {
  id: string;
  nome: string;
  potencia: number;       // W
  consumoMensal: number;  // kWh/mês
}

export interface ApplianceAPIItem {
  id: string;
  name: string;
  watts: number;
  kwh_month: number;
}

export type ApplianceAPIResponse = ApplianceAPIItem[];
