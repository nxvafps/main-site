import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { IconObj } from "../../../types";

// Define the state type
type SelectedIconState = IconObj | null;

// Define the action payload types
type SetSelectedIconPayload = IconObj;

const initialState: SelectedIconState = null as SelectedIconState;

const selectedIconSlice = createSlice({
  name: "selectedIcon",
  initialState,
  reducers: {
    setSelectedIcon: (state, action: PayloadAction<SetSelectedIconPayload>) => {
      return action.payload;
    },
    clearSelectedIcon: () => {
      return null;
    },
  },
});

export const { setSelectedIcon, clearSelectedIcon } = selectedIconSlice.actions;
export default selectedIconSlice.reducer;
