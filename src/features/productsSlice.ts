import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  price: number;
}

const initialState: Product[] = [
  { id: "bread", name: "Bread", price: 1.10 },
  { id: "milk", name: "Milk", price: 0.50 },
  { id: "cheese", name: "Cheese", price: 0.90 },
  { id: "soup", name: "Soup", price: 0.60 },
  { id: "butter", name: "Butter", price: 1.20 }
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
