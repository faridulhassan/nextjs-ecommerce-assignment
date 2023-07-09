import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({
        ...action.payload,
        quantity: action.payload.quantity ? action.payload.quantity : 1,
      });
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
