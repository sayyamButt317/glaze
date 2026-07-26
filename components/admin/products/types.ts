export type StockLevel = "in_stock" | "low" | "out";
export type ProductStatus = "active" | "draft" | "out_of_stock";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  stockLevel: StockLevel;
  aiMatchEnabled: boolean;
  status: ProductStatus;
  imageTone: string;
  colors: string[];
  sizes: { label: string; qty: number }[];
  materials: string[];
  variants: ProductVariant[];
  images: { id: string; label?: string; tone: string }[];
};

export type ProductVariant = {
  id: string;
  label: string;
  sku: string;
  stock: number;
  status: StockLevel;
};

export type ProductStat = {
  id: string;
  label: string;
  value: string;
  change: string;
  hint: string;
  tone: "neutral" | "warning" | "danger" | "success";
  icon: "bag" | "alert" | "ban" | "chart";
};

export type ProductFilters = {
  category: string;
  frameType: string;
  lensType: string;
  stockStatus: string;
};
