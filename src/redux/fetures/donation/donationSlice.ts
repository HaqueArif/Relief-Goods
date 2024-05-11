import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TDonator = {
  name: string;
  email: string;
};

type TDonatedField = {
  title: string;
  amount: string;
};
type TDonation = {
  donator: TDonator;
  TDonatedField: TDonatedField;
};

type TInitialState = {
  donation: TDonation[];
};
const initialState: TInitialState = {
  donation: [],
};
const supplySlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    donation: (state, action: PayloadAction<TDonation>) => {
      state.donation.push({ ...action.payload });
    },
  },
});

export const { donation } = supplySlice.actions;
export default supplySlice.reducer;
