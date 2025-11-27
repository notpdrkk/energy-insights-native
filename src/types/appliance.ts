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

export interface Electro {
  id: string;
  name: string;
  kwh_month: number;
}

export interface User {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  photo?: string;
  appliancesIds: string[];
}
