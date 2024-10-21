import { createSlice } from "@reduxjs/toolkit";

const initialState = "mobile";

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action) => action.payload,
  },
});

export const { setLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
