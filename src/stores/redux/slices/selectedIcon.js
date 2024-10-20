import { createSlice } from "@reduxjs/toolkit";

const selectedIconSlice = createSlice({
  name: "selectedIcon",
  initialState: null,
  reducers: {
    setSelectedIcon: (state, action) => action.payload,
    clearSelectedIcon: () => null,
  },
});

export const { setSelectedIcon, clearSelectedIcon } = selectedIconSlice.actions;
export default selectedIconSlice.reducer;
