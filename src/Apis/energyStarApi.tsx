import axios from "axios";

const ENERGY_STAR_API = "https://data.energystar.gov/resource/4y4k-7u6v.json";

export const energyApi = axios.create({ baseURL: ENERGY_STAR_API });

export interface EnergyAppliance {
  id?: string;
  product_name: string;
  product_category: string;
}


export const getCategories = async (): Promise<string[]> => {
  const res = await energyApi.get<EnergyAppliance[]>("");
  const categories = Array.from(new Set(res.data.map(a => a.product_category)));
  return categories;
};


export const getAppliancesByCategory = async (category: string): Promise<EnergyAppliance[]> => {
  const res = await energyApi.get<EnergyAppliance[]>(`?$where=product_category='${category}'`);
  return res.data;
};
