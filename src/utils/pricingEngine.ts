import type { Product } from "../features/productsSlice";

export interface BillSummary {
  subtotal: number;
  savings: number;
  total: number;
  appliedOffers: string[];
}

export const calculateBill = (
  cart: Record<string, number>,
  products: Product[]
): BillSummary => {
  let subtotal = 0;
  let savings = 0;
  const appliedOffers: string[] = [];

  const getPrice = (id: string) =>
    products.find((p) => p.id === id)?.price || 0;

  Object.entries(cart).forEach(([id, qty]) => {
    subtotal += getPrice(id) * qty;
  });

  const cheeseQty = cart["cheese"] || 0;
  if (cheeseQty >= 2) {
    const freeCheese = Math.floor(cheeseQty / 2);
    const save = freeCheese * getPrice("cheese");
    savings += save;
    appliedOffers.push(`Cheese offer: -£${save.toFixed(2)}`);
  }

  const soupQty = cart["soup"] || 0;
  const breadQty = cart["bread"] || 0;
  const eligibleBread = Math.min(soupQty, breadQty);

  if (eligibleBread > 0) {
    const save = eligibleBread * getPrice("bread") * 0.5;
    savings += save;
    appliedOffers.push(`Soup & Bread offer: -£${save.toFixed(2)}`);
  }

  const butterQty = cart["butter"] || 0;
  if (butterQty > 0) {
    const save = (butterQty * getPrice("butter")) / 3;
    savings += save;
    appliedOffers.push(`Butter offer: -£${save.toFixed(2)}`);
  }

  return {
    subtotal,
    savings,
    total: subtotal - savings,
    appliedOffers
  };
};
