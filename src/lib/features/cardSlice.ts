import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../app/types/card.interface";

const initialState: ICard[] = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICard>) => {
      state.push(action.payload);
    },
    addCards: (state, action: PayloadAction<ICard[]>) => {
      state.push(...action.payload);
    },
    updateCard: (state, action: PayloadAction<ICard>) => {
      const index = state.findIndex((blog) => blog.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCard: (state, action: PayloadAction<ICard>) => {
      const index = state.findIndex((blog) => blog.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addCard, addCards, updateCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
