import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCreateSupply = {
  image: string;
  category: string;
  title: string;
  amount: string;
  description: string;
};
type TInitialState = {
  createSupply: TCreateSupply[];
};
const initialState: TInitialState = {
  createSupply: [],
};
const supplySlice = createSlice({
  name: "createSupply",
  initialState,
  reducers: {
    createSupply: (state, action: PayloadAction<TCreateSupply>) => {
      state.createSupply.push({ ...action.payload });
    },
  },
});

export const { createSupply } = supplySlice.actions;
export default supplySlice.reducer;
