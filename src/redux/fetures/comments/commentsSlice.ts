import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCommenter = {
  email: string;
  details: string;
};

type TInitialState = {
  comments: TCommenter[];
};
const initialState: TInitialState = {
  comments: [],
};
const supplySlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    comments: (state, action: PayloadAction<TCommenter>) => {
      state.comments.push({ ...action.payload });
    },
  },
});

export const { comments } = supplySlice.actions;
export default supplySlice.reducer;
