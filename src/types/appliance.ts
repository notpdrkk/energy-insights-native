export interface Appliance {
  id: string;
  nome: string;
  potencia: number;       
  consumoMensal: number; 
}

export interface ApplianceAPIItem {
  id: string;
  name: string;
  watts: number;
  kwh_month: number;
}

export type ApplianceAPIResponse = ApplianceAPIItem[];
