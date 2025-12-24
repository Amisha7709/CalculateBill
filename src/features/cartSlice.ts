import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartState = Record<string, number>;

const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    removeItem(state, action: PayloadAction<string>) {
      if (!state[action.payload]) return;

      state[action.payload] -= 1;

      if (state[action.payload] === 0) {
        delete state[action.payload];
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
