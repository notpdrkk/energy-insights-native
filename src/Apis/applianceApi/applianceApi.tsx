import { Appliance, ApplianceAPIItem } from "../../types/appliance";
import { traduzir } from "../../Utils/Translate/translate";

const API_URL =
  "https://6920e6c9512fb4140bdec3a1.mockapi.io/appliances/Appliances";

export async function fetchAppliances(): Promise<Appliance[]> {
  const res = await fetch(API_URL);

  if (!res.ok) throw new Error("Erro ao acessar API");

  const json: ApplianceAPIItem[] = await res.json();

  return json.map((item, index) => {
    // Corrigir IDs inválidos ou repetidos
    const safeId =
      item.id && item.id !== "" && item.id !== null
        ? String(item.id)
        : `appliance-${index}`;

    return {
      id: `${safeId}-${index}`, // GARANTE UNICIDADE SEMPRE
      nome: traduzir(item.name),
      potencia: item.watts,
      consumoMensal: item.kwh_month,
    };
  });
}
