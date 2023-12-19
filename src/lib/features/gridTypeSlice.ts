import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GridType } from "@/app/types/grid-type.enum";

const initialState: GridType = GridType.MEDIUM as GridType;

export const gridTypeSlice = createSlice({
  name: "gridType",
  initialState,
  reducers: {
    setGridType: (state, action: PayloadAction<GridType>) => {
      return action.payload;
    },
  },
});

export const { setGridType } = gridTypeSlice.actions;

export default gridTypeSlice.reducer;
