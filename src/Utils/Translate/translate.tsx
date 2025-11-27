const categoryTranslate: Record<string, string> = {
  "Refrigerators": "Geladeiras",
  "Air Conditioners": "Ar-condicionado",
  "Washing Machines": "Máquinas de lavar",
  "Dryers": "Secadoras",
  "Dishwashers": "Lava-louças",
  "Microwaves": "Micro-ondas",
  "Televisions": "Televisões",
  "Computers": "Computadores",
  "Laptops": "Notebooks",
  "Fans": "Ventiladores",
  "Other": "Outros",
};

const applianceNameTranslate: Record<string, string> = {
  "Refrigerator": "Geladeira",
  "Air Conditioner": "Ar-condicionado",
  "Washing Machine": "Máquina de lavar",
  "Dryer": "Secadora",
  "Dishwasher": "Lava-louças",
  "Microwave": "Micro-ondas",
  "Television": "Televisão",
  "Computer": "Computador",
  "Laptop": "Notebook",
  "Fan": "Ventilador",
};

export function traduzir(value: string): string {
  if (!value) return value;

  const normalized = value.trim();

  if (categoryTranslate[normalized]) {
    return categoryTranslate[normalized];
  }

  if (applianceNameTranslate[normalized]) {
    return applianceNameTranslate[normalized];
  }

  return value; 
}
