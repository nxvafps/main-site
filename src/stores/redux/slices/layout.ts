import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LayoutState = string;

const initialState: LayoutState = "mobile";

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<LayoutState>) => {
      return action.payload;
    },
  },
});

export const { setLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
