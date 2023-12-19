import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../lib/features/cardSlice";
import gridTypeReducer from "../lib/features/gridTypeSlice";
import filterReducer from "../lib/features/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cards: cardReducer,
      gridType: gridTypeReducer,
      filter: filterReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
